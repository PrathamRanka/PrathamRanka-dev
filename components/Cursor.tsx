import Ribbons from './ui/Ribbons';

export default function Cursor() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Ribbons
        baseThickness={30}
        colors={['#ffffff']}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
      />
    </div>
  );
}
