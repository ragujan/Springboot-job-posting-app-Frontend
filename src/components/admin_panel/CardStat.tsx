type CardStatProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

export default function CardStat({ title, value, icon }: CardStatProps) {
  return (
    <div className="flex items-center gap-4 p-6 shadow-md rounded-xl bg-card-bg text-text">
      <div className="text-2xl text-accent">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
