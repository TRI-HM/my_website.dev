import React, { useEffect, useRef } from "react";

type CompletionModalProps = {
  open: boolean;
  onClose?: () => void;
};

const CompletionModal: React.FC<CompletionModalProps> = ({ open, onClose }) => {
  // Confetti canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!open) return;

    // Simple confetti animation (canvas)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Confetti particles
    const confettiColors = [
      "#FFD700",
      "#FF69B4",
      "#00CFFF",
      "#FF6E40",
      "#B388FF",
    ];
    const confettiCount = 120;
    const confetti: {
      x: number;
      y: number;
      r: number; // radius
      d: number; // density
      color: string;
      tilt: number;
      tiltAngleIncremental: number;
      tiltAngle: number;
    }[] = [];
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * W,
        y: Math.random() * H - H,
        r: Math.random() * 6 + 6,
        d: Math.random() * confettiCount,
        color:
          confettiColors[Math.floor(Math.random() * confettiColors.length)],
        tilt: Math.floor(Math.random() * 20) - 10,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0,
      });
    }

    let angle = 0;
    let confettiTimer: number;
    let running = true;

    function drawConfetti() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < confetti.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = confetti[i].r;
        ctx.strokeStyle = confetti[i].color;
        ctx.moveTo(
          confetti[i].x + confetti[i].tilt + confetti[i].r / 3,
          confetti[i].y
        );
        ctx.lineTo(
          confetti[i].x + confetti[i].tilt,
          confetti[i].y + confetti[i].tilt + confetti[i].r / 3
        );
        ctx.stroke();
      }
      updateConfetti();
    }

    function updateConfetti() {
      angle += 0.01;
      for (let i = 0; i < confetti.length; i++) {
        const c = confetti[i];
        c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) / 2;
        c.x += Math.sin(angle);
        c.tiltAngle += c.tiltAngleIncremental;
        c.tilt = Math.sin(c.tiltAngle) * 15;

        // Recycle when off screen
        if (c.y > H + 20) {
          c.x = Math.random() * W;
          c.y = -10;
          c.tilt = Math.floor(Math.random() * 10) - 10;
        }
      }
    }

    function animate() {
      if (!running) return;
      drawConfetti();
      confettiTimer = requestAnimationFrame(animate);
    }
    animate();

    // Stop after 2.2s
    setTimeout(() => {
      running = false;
      ctx.clearRect(0, 0, W, H);
    }, 5000);

    return () => {
      running = false;
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
