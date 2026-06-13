export function Initials({ name }: { name: string }) {
  const parts = name.replace(/,.*/, '').trim().split(' ');
  const initials =
    parts.length >= 2 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0][0];
  return (
    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-navy-primary to-teal-primary">
      <span className="text-white text-3xl font-bold tracking-wide">{initials.toUpperCase()}</span>
    </div>
  );
}
