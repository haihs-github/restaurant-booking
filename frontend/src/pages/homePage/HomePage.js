import React from 'react';
import styles from './HomePage.module.scss';

const HomePage = () => {
	return (
		<div className={styles.container}>
			<h2>Chào mừng bạn đến với nhà hàng của chúng tôi!</h2>
			{/* sau này sẽ có form đặt bàn ở đây */}
		</div>
	);
};

export default HomePage;
