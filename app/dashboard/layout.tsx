export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      Esto es layout del Dashboard
      {children}
    </section>
  );
}
