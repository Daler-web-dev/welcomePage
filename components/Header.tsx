import { motion } from "framer-motion";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<header>
			<div className="header w-full fixed top-0 left-0 z-50 bg-white">
				<motion.p
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0,
						ease: "easeOut",
						duration: 1,
					}}
					className="text-[17px]"
				>
					Декабрь, 3
				</motion.p>

				<motion.p
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0,
						ease: "easeOut",
						duration: 1,
					}}
					className="text-[17px]"
				>
					Рустам & Зилола
				</motion.p>
			</div>
		</header>
	);
};

export default Header;
