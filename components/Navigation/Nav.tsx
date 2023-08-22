'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import Socials from '../Socials';

const Nav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	return (
		<nav className='flex-between w-full max-w-7xl pt-3 relative'>
			<Logo />
			<div className='sm:flex hidden'>
				<div className='flex gap-3 md:gap-5'>
					<Link href='/#aboutme' className='menu_link'>
						About me
					</Link>
					<Link href='/#projects' className='menu_link'>
						Projects
					</Link>
					<Link href='/#contact' className='menu_link'>
						Contact
					</Link>
				</div>
			</div>

			<div className='sm:hidden flex'>
				<div className='flex'>
					<button onClick={() => setToggleDropdown(!toggleDropdown)}>
						<svg
							className='burger'
							width='50px'
							height='50px'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M5 8H13.75M5 12H19M10.25 16L19 16' stroke='#0369A1' />
						</svg>
					</button>
					{toggleDropdown && (
						<div className='dropdown pt-3'>
							<div className='flex flex-row w-full justify-between'>
								<Logo />
								<button onClick={() => setToggleDropdown(!toggleDropdown)}>
									<svg
										width='50px'
										height='50px'
										viewBox='0 0 64 64'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										stroke='#0369A1'
									>
										<line x1='16' y1='16' x2='48' y2='48' />
										<line x1='48' y1='16' x2='16' y2='48' />
									</svg>
								</button>
							</div>
							<div className='flex flex-col gap-20'>
								<Link
									href='/#aboutme'
									className='dropdown_link'
									onClick={() => setToggleDropdown(false)}
								>
									About me
								</Link>
								<Link
									href='/#projects'
									className='dropdown_link'
									onClick={() => setToggleDropdown(false)}
								>
									Projects
								</Link>
								<Link
									href='/#contact'
									className='dropdown_link'
									onClick={() => setToggleDropdown(false)}
								>
									Contact
								</Link>
								<Socials />
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
