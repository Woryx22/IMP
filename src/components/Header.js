import { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, CameraIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Úvod', href: '#introduction', current: false },
    { name: 'Rodinné focení', href: '#familyphotos', current: false },
    { name: 'Svatení focení', href: '#weddingphotos', current: false },
    { name: 'Těhotenské/párové focení', href: '#pairphotos', current: false },
    { name: 'Focení koní', href: '#horsephotos', current: false },
    { name: 'Kontakt', href: '#contact', current: false },
    { name: 'Galerie', href: '#galerie', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scroll dolu
                setIsVisible(false);
                
            } else {
                // Scroll nahoru
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Disclosure as="nav" className={`bg-gray-600 bg-opacity-75 fixed top-0 z-10 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/*Mobile*/}
                    <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400
                         hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center sxl:items-stretch xl:justify-start">
                        <div className="flex shrink-0 items-center xl:mr-10">
                            <span className="font-bold text-white"><a href="#main">Kateřina Horáčková</a></span>
                        </div>
                        <div className="hidden xl:ml-6 xl:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*Profile*/}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 xl:static xl:inset-auto xl:ml-6 xl:pr-0">
                        <a 
                            href="https://www.instagram.com/khphoto_cz" target="_blank" rel="noopener noreferrer"
                            className="relative rounded-lg bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <CameraIcon aria-hidden="true" className="size-6" />
                        </a>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="xl:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
