'use client'

import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const HowToUse = () => {
  const [activeCard, setActiveCard] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalCards = 7;
  const touchStartRef = useRef(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (wheelTimeoutRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      
      setActiveCard(prev => {
        const next = prev + direction;
        if (next < 1) return 1;
        if (next > totalCards) return totalCards;
        return next;
      });

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 500);
    };

    // 触摸事件处理
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (wheelTimeoutRef.current) return;

      const touchEnd = e.touches[0].clientY;
      const diff = touchStartRef.current - touchEnd;
      
      // 设置最小滑动距离阈值
      if (Math.abs(diff) < 30) return;

      const direction = diff > 0 ? 1 : -1;
      
      setActiveCard(prev => {
        const next = prev + direction;
        if (next < 1) return 1;
        if (next > totalCards) return totalCards;
        return next;
      });

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 500);

      // 更新起始位置
      touchStartRef.current = touchEnd;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
      section.addEventListener('touchstart', handleTouchStart);
      section.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
        section.removeEventListener('touchstart', handleTouchStart);
        section.removeEventListener('touchmove', handleTouchMove);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, []);

  const getCardStyle = (cardIndex: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    
    const baseStyle = {
      position: 'absolute' as const,
      transition: 'all 0.5s ease-out',
      width: isMobile ? '85vw' : 'clamp(300px, 37.85vw, 600px)',
      transformOrigin: '50% 50%',
    };

    const mobilePositions = {
      transform: cardIndex === activeCard 
        ? 'translateY(0) scale(1)' 
        : cardIndex < activeCard
          ? 'translateY(-120%) scale(0.9)' 
          : 'translateY(120%) scale(0.9)',
      opacity: Math.abs(cardIndex - activeCard) > 1 ? 0 : 1,
      zIndex: cardIndex === activeCard ? 141 : 130,
    };

    const desktopPositions = {
      left: `${20.12 + (cardIndex - activeCard) * 30}vw`,
      zIndex: cardIndex === activeCard ? 141 : 130,
      transform: cardIndex === activeCard 
        ? 'perspective(80vw) rotateY(0deg)' 
        : cardIndex < activeCard
          ? 'perspective(80vw) rotateY(-65deg)' 
          : 'perspective(80vw) rotateY(65deg)',
      opacity: Math.abs(cardIndex - activeCard) > 1 ? 0 : 1,
    };

    return { 
      ...baseStyle, 
      ...(isMobile ? mobilePositions : desktopPositions) 
    };
  };

  const styles = `
    @keyframes gradient-shift-slow {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(10%, 15%) rotate(5deg); }
      50% { transform: translate(-5%, -10%) rotate(-5deg); }
      75% { transform: translate(-15%, 5%) rotate(3deg); }
    }

    @keyframes gradient-shift-medium {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(-10%, 15%) rotate(-3deg); }
      66% { transform: translate(15%, -10%) rotate(6deg); }
    }

    @keyframes spotlight {
      0% { transform: translate(-50%, -50%) scale(0); }
      100% { transform: translate(0, 0) scale(1); }
    }
  `;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const styleTag = document.createElement('style');
      styleTag.textContent = styles;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="how-to-use" 
      className="flex w-full relative bg-background
        h-[200.74vw] sm:h-[48.5vw] 
        overflow-hidden touch-pan-y"
    >
      {/* 标题文字 */}
      <div className="opacity-100 transform-none">
        <p className="absolute text-[#55425d] font-bold
          sm:left-[1.5vw] sm:top-[1.3vw] sm:text-[8.36vw] sm:leading-[5vw] sm:-translate-x-1/3 sm:translate-y-full
          left-[20.33vw] -translate-x-[45%] -rotate-90 text-[24.8vw] leading-[14.93vw] text-nowrap">
          Creator <br /> Value <br /> Upgrade
        </p>
      </div>

      {/* 圆形边框 */}
      <div className="rounded-full border-[0.78px] border-[#C7C7C1] opacity-50 absolute
        sm:w-[61vw] sm:h-[61vw] sm:top-[-6vw] sm:left-[393px]
        w-[227.73vw] h-[227.73vw] top-[-15vw] left-[41.43vw]" />

      {/* 主标题 */}
      {/* <div className="absolute z-[126] left-1/2 -translate-x-1/2 whitespace-nowrap
        sm:top-[8vw] sm:text-center
        top-[20vw]">
        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 via-slate-200 to-slate-200/60 
          sm:text-[2.5vw] sm:tracking-wider
          text-[6vw] tracking-wide">
          Creator Value Upgrade
        </h1>
      </div> */}

      {/* 卡片容器 */}
      <div className="z-[125] absolute w-full
        sm:right-[40px] sm:left-[20.12vw] sm:h-[44.5vw] sm:bottom-0
        left-0 h-[100.54vw] bottom-[25%]">
        <div className="z-[125] flex relative h-full w-full items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7].map((cardIndex) => (
            <div
              key={cardIndex}
              style={getCardStyle(cardIndex)}
              className="sm:hover:scale-105 transition-transform duration-300"
            >
              <div className="z-20 relative border border-[#FFFFFF29] flex flex-col bg-background overflow-hidden
                sm:w-[42.85vw] sm:h-[27.07vw] sm:pt-[4.21vw] sm:px-[3.28vw] sm:gap-0 sm:justify-between
                h-[100.53vw] w-[73.86vw] py-[12vw] px-[10.66vw] gap-[13.33vw] group">
                {/* 动态背景 */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 animate-gradient-slow" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-cyan-500/30 mix-blend-overlay animate-gradient-medium" />
                  <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] group-hover:animate-spotlight" />
                </div>
                
                <div className="flex flex-col gap-[2.14vw] relative">
                  <p className="font-bold font-mono text-black dark:text-white
                    sm:text-[2vw] sm:leading-[1.14vw]
                    text-[6.4vw] leading-[3.73vw]">
                    {cardIndex === 1 && "Personalized Interaction"}
                    {cardIndex === 2 && "Fan Monetization"}
                    {cardIndex === 3 && "Efficient Empowerment"}
                    {cardIndex === 4 && "Privacy Protection"}
                    {cardIndex === 5 && "Brand Enhancement"}
                    {cardIndex === 6 && "Virtual Identity"}
                    {cardIndex === 7 && "Innovative Monetization"}
                  </p>
                </div>
                <p className="font-aspekta font-normal text-black dark:text-white relative
                  sm:text-[1.28vw] sm:leading-[1.57vw] sm:w-[24.28vw]
                  text-[2.93vw] leading-[3.2vw]">
                  {cardIndex === 1 && "AI avatars communicate precisely, customizing fan experiences."}
                  {cardIndex === 2 && "Membership payment model, maximizing fan value."}
                  {cardIndex === 3 && "Avatar automated interaction, reducing costs and enhancing efficiency."}
                  {cardIndex === 4 && "Blockchain-enabled data security, reliable and safe."}
                  {cardIndex === 5 && "Customized digital avatars, refreshing and upgrading brands."}
                  {cardIndex === 6 && "Virtual social avatars, enabling immersive metaverse interactions."}
                  {cardIndex === 7 && "Token economy empowerment, diverse revenue channels."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
