import Link from "next/link";

interface HeaderInterface {
  title?: string
}

export const Header = (props: HeaderInterface) => {
  const { title } = props
  return (
    <div className="bg-red-700 flex flex-row gap-3 p-4">
      <div>{title}</div>
      <ul>
        <li>
          <Link href="/src/planets/">Planets</Link>
        </li>
      </ul>
    </div>
  );
};
