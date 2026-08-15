// Custom Cursor Component for Desktop
const CustomCursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);

  React.useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      // Check if hovering over clickable element
      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, select, .clickable, .project-card, .skill-card');
      if (isClickable) {
        document.body.classList.add('hovering-clickable');
      } else {
        document.body.classList.remove('hovering-clickable');
      }
    };

    let animationFrame;
    const render = () => {
      // Lerp ring position for buttery smooth trailing physics
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <React.Fragment>
      <div ref={dotRef} class="custom-cursor-dot hidden md:block" />
      <div ref={ringRef} class="custom-cursor-ring hidden md:block" />
    </React.Fragment>
  );
};

window.CustomCursor = CustomCursor;
