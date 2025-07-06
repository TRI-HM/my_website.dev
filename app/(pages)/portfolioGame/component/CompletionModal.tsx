import React, { useEffect, useRef } from "react";

type CompletionModalProps = {
  open: boolean;
  onClose?: () => void;
};

type ConfettiParticle = {
  x: number;
  y: number;
  r: number; // radius
  d: number; // density
  color: string;
  tilt: number;
  tiltAngleIncremental: number;
  tiltAngle: number;
};

const CONFETTI_DURATION = 5000; // 5 giây

const CompletionModal: React.FC<CompletionModalProps> = ({ open, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!open) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const confettiColors = [
      "#FFD700",
      "#FF69B4",
      "#00CFFF",
      "#FF6E40",
      "#B388FF",
    ];
    const confetti: ConfettiParticle[] = [];
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let angle = 0;
    let confettiTimer = 0;
    let spawnEnabled = true;

    // Sinh pháo giấy liên tục trong 5s, sau đó dừng sinh mới, chỉ cho các mảnh còn lại rơi hết
    function spawnConfetti() {
      if (!spawnEnabled) return;
      for (let i = 0; i < 2; i++) {
        confetti.push({
          x: Math.random() * W,
          y: -20,
          r: Math.random() * 6 + 6,
          d: Math.random() * 120,
          color:
            confettiColors[Math.floor(Math.random() * confettiColors.length)],
          tilt: Math.floor(Math.random() * 20) - 10,
          tiltAngleIncremental: Math.random() * 0.07 + 0.05,
          tiltAngle: 0,
        });
      }
    }

    const spawnInterval = setInterval(spawnConfetti, 40);

    setTimeout(() => {
      spawnEnabled = false;
      clearInterval(spawnInterval);
    }, CONFETTI_DURATION);

    function drawConfetti() {
      if (!ctxRef.current) return;
      ctxRef.current.clearRect(0, 0, W, H);
      for (let i = 0; i < confetti.length; i++) {
        ctxRef.current.beginPath();
        ctxRef.current.lineWidth = confetti[i].r;
        ctxRef.current.strokeStyle = confetti[i].color;
        ctxRef.current.moveTo(
          confetti[i].x + confetti[i].tilt + confetti[i].r / 3,
          confetti[i].y
        );
        ctxRef.current.lineTo(
          confetti[i].x + confetti[i].tilt,
          confetti[i].y + confetti[i].tilt + confetti[i].r / 3
        );
        ctxRef.current.stroke();
      }
    }

    function updateConfetti() {
      angle += 0.01;
      for (let i = 0; i < confetti.length; i++) {
        const c = confetti[i];
        c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) / 2;
        c.x += Math.sin(angle);
        c.tiltAngle += c.tiltAngleIncremental;
        c.tilt = Math.sin(c.tiltAngle) * 15;
      }
      // Xóa mảnh đã rơi ra khỏi màn hình
      for (let i = confetti.length - 1; i >= 0; i--) {
        if (confetti[i].y > H + 40) {
          confetti.splice(i, 1);
        }
      }
    }

    function animate() {
      drawConfetti();
      updateConfetti();
      if (confetti.length > 0 || spawnEnabled) {
        confettiTimer = requestAnimationFrame(animate);
      } else {
        if (!ctxRef.current) return;
        ctxRef.current.clearRect(0, 0, W, H);
      }
    }
    animate();

    return () => {
      spawnEnabled = false;
      clearInterval(spawnInterval);
      cancelAnimationFrame(confettiTimer);
      ctx.clearRect(0, 0, W, H);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Confetti canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-50"
      />
      {/* Pop-up */}
      <div className="relative z-60 bg-white rounded-2xl shadow-2xl px-12 py-10 flex flex-col items-center animate-bounce-in">
        <div className="text-5xl mb-3 select-none">🎉</div>
        <h2 className="text-2xl font-bold mb-2 select-none">Chúc mừng bạn!</h2>
        <p className="mb-6 text-lg select-none">
          Bạn đã thu thập đủ 5 thẻ bài!
        </p>
        <button
          className="px-8 py-3 rounded-lg bg-blue-500 text-white text-lg font-bold hover:bg-blue-600 focus:outline-none transition-all shadow-md"
          onClick={onClose}>
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default CompletionModal;
