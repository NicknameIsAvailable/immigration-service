'use client'

import { useEffect, useState } from 'react'
import Arrow from '../../../../public/icons/arrow'
import styles from './styles.module.scss'

const FloatingButton = () => {
	const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 500 && scrollTop < 8000);
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
			<Arrow/>
		</button>
	)
}

export default FloatingButton
