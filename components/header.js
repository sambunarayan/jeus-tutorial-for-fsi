import Link from 'next/link';
import Image from 'next/image';
import FSI from '@/public/fsi.png';

export default function Header() {
    return (
        <>
            <header className="fixed top-0 inset-x-0 top-0 text-gray-600 body-font bg-slate-500">
                <div className="items-center flex flex-nowrap">
                    <Link href="/" legacyBehavior>
                        <a className="basis-1/2 title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
                            <span className="ml-3 text-xl">Tutorial</span>
                        </a>
                    </Link>
                    <div className="basis-1/2 items-center justify-center">
                        <Image src={FSI}
                            width={30}
                            height={30}
                            alt="Jeus" />
                    </div>
                    <nav className="absolute right-0 md:ml-auto flex flex-wrap items-center text-base">
                        <Link href="/" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">環境構築</a>
                        </Link>
                        <Link href="/template" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900 dark:text-slate-400 dark:hover:text-yellow-300">Template</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}