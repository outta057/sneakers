import React from "react";
import logo from "./assets/logo.png";


const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header_info">
				<div className="header_info_container">
					<a href="" className="header_info_telephone">
						<h5>+38 063 3333 333</h5>
					</a>

					<button className="header_info_call">Заказать звонок</button>

					<div className="header_info_work-hours">
						<h5>с 09:00 до 21:00 без выходных</h5>
					</div>
				</div>
			</div>
			<div className="header_main">
				<div className="header_main_container">
					<div className="header_main_container_logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="header_main_container_search">
						<input type="text" placeholder="Поиск" />
					</div>
					<div className="header_main_block">
						<div className="header_main_block_languages">
						<div className="header_main_block_languages_div">
							<button className="header_main_block_languages_button">UA</button>
						</div>
						<div className="header_main_block_languages_div">
							<button className="header_main_block_languages_button">| EN |</button>
						</div>
						<div className="header_main_block_languages_div">
							<button className="header_main_block_languages_button">RU</button>
							</div>
						</div>
						<button className="header_main_block_button">обратная связь</button>
						<a href="" className="header_main_block_ahref">
							избранное
						</a>
						<button className="header_main_block_button">корзина</button>
					</div>
				</div>
			</div>
			<div className="header_categories">
				<div className="header_categories_container">
					<ul className="header_categories_container_ul">
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Все товары
							</a>
						</li>
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Женщинам
							</a>
						</li>
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Мужчинам
							</a>
						</li>
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Акции
							</a>
						</li>
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Размеры
							</a>
						</li>
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Доставка и оплата
							</a>
						</li>
						<li>
							<a href="" className="header_categories_container_ul_ahref">
								Контакты
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
