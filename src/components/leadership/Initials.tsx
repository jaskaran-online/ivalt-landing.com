export function Initials({ name }: { name: string }) {
  const parts = name.replace(/,.*/, '').trim().split(' ');
  const initials =
    parts.length >= 2 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0][0];
  return (
    <div className="w-full h-full flex items-center justify-center bg-navy-primary">
      <span className="text-white/90 text-2xl font-extralight tracking-widest select-none">
        {initials.toUpperCase()}
      </span>
    </div>
  );
}
