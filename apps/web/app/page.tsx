import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-bold text-red-500">Hello World</h1> */}
      <button className="p-2 text-white bg-blue-500 rounded">Click me</button>
      <Button variant="secondary">Click me</Button>
    </div>
  );
}
