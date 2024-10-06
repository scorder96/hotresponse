import MouseTrail from "@scorder/react-mouse-trail";

export function FireTrail() {
  const config = {
    color: "#f97316",
    idleAnimation: true,
    idleAnimationCount: 10,
    inverted: false,
    size: 20,
    trailCount: 20,
  };

  return <MouseTrail {...config} />;
}
