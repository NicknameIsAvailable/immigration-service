'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const FloatingButton = () => {
	const arrow = '../../../../public/Mask group.png'
	const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

	return (
		<button
			onClick={handleClick}
			className={styles.floatingButton}
			style={
				isVisible
					? { transform: 'translateY(0)', opacity: 1, pointerEvents: 'all' }
					: { transform: 'translateY(40px)', opacity: 0, pointerEvents: 'none' }
			}
		>
			<div className={styles.arrow} />
		</button>
	)
}

export default FloatingButton
