import React from 'react'
import s from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={s.container}>
			
			<div className={s.navbar}>
				<button>HOME</button>
				<button>CATEGORIAS</button>
				<button>FOR SALE</button>
			</div>

			<div className={s.banner}>
			    <h2>AHORA, También para ellas</h2>
			</div>

		</div>
	)
};

export default NavBar;
