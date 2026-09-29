import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4">Documentation</h1>
      <p className="text-slate-400 mb-8">Learn how to integrate and use our fraud prevention tools.</p>
      <Link href="/" className="text-indigo-400 hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  );
}