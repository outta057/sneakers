import React from "react";

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header__info">
				<a href="" className="header__info__telephone">
					<h5>+38 063 3333 333</h5>
				</a>

				<button className="header__info__call">Заказать звонок</button>

				<div className="header__info__work-hours">
					<h5>с 09:00 до 21:00 без выходных</h5>
				</div>
			</div>
			<div className="header__main">
				<div>
					<p>лого</p>
				</div>
				<div>поиск</div>
				<div>
					<p>корзина</p>
				</div>
			</div>
			<div className="header__categories">
				<ul >
					<li>Категория 1</li>
					<li>Категория 2</li>
					<li>Категория 3</li>
					<li>Категория 4</li>
					<li>Категория 5</li>
					<li>Категория 6</li>
					<li>Категория 7</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
