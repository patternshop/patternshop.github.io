export default function MySubTitle({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <h2 className="font-bold text-nice-blue">
      {children}
    </h2>
  );
}
