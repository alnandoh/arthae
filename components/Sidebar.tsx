import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[250px] h-fit sticky top-1/2 -translate-y-2/3 bg-tertiary-500/40 rounded-2xl p-6 flex flex-col justify-center overflow-y-auto font-medium">
      <div className="mb-4 rounded-lg transition duration-200 ease-in-out hover:bg-primary-500 hover:text-secondary-500 text-center py-2">
        <Link href="/" className="text-2xl font-bold">
          ArtHAE
        </Link>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <div className="py-1 rounded transition duration-200 ease-in-out hover:bg-primary-500 hover:text-secondary-500">
              <Link href="/gallery" className="pl-4">
                Gallery
              </Link>
            </div>
            <ul className="mt-2 space-y-1">
              <li className="py-1 rounded transition duration-200 ease-in-out hover:bg-primary-500 hover:text-secondary-500 ml-4">
                <Link href="/" className="pl-4">
                  Animanga
                </Link>
              </li>
              <li className="py-1 rounded transition duration-200 ease-in-out hover:bg-primary-500 hover:text-secondary-500 ml-4">
                <Link href="/" className="pl-4">
                  Portrait Drawing
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-1 rounded transition duration-200 ease-in-out hover:bg-primary-500 hover:text-secondary-500">
            <Link href="/service" className="pl-4">
              Service
            </Link>
          </li>
          <li className="py-1 rounded transition duration-200 ease-in-out hover:bg-primary-500 hover:text-secondary-500">
            <Link href="/contact" className="pl-4">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
