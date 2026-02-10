fn rand(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(12.9898,78.233))) * 43758.5453);
}
