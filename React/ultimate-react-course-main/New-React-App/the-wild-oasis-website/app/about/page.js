import Link from "next/link";

export const metadate = {
  title: "About",
};

export default function Page() {
  return (
    <div>
      <h1>About the Wild Oasis</h1>

      <Link href="/cabins">Explore Luxury cabins.</Link>
    </div>
  );
}
