'use client';

import Section from "@/components/newHome/section";
import Image from "@/components/newHome/image";
import Button from "@/components/newHome/button";
import Heading from "@/components/newHome/heading";
import { roadmap } from "@/components/newHome/mocks/roadmap";
import Tagline from "@/components/newHome/tagline/tagline";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

type RoadmapProps = {};

const Features2 = ({}: RoadmapProps) => {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [sectionRect, setSectionRect] = useState({ top: 0, left: 0, width: 0, height: 0 });

    useEffect(() => {
        const section = document.querySelector('.features2-section');
        if (section) {
            const updateRect = () => {
                const rect = section.getBoundingClientRect();
                setSectionRect({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height
                });
            };
            
            updateRect();
            window.addEventListener('resize', updateRect);
            window.addEventListener('scroll', updateRect);

            return () => {
                window.removeEventListener('resize', updateRect);
                window.removeEventListener('scroll', updateRect);
            };
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX - sectionRect.left;
            const y = e.clientY - sectionRect.top;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [sectionRect]);

    const gradientStyle = {
        transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
        transition: 'transform 0.2s ease-out'
    };
    
    return (
        <Section className="overflow-hidden relative features2-section">
            <div className="container md:pb-10">
                <Heading tag="real-time influence anywhere anytime" title={t("common.features.title")} />
                <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    {roadmap.map((item, index) => (
                        <div
                            className={`md:flex ${
                                index % 2 !== 0 ? "md:translate-y-[7rem]" : ""
                            } p-0.25 rounded-[2.5rem] ${
                                item.colorful ? "bg-conic-gradient" : "bg-n-6"
                            }`}
                            key={item.id}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <Image
                                        className="w-full"
                                        src="/images/new-home/grid.png"
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>
                                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                            <Image
                                                className="mr-2.5"
                                                src={
                                                    item.status === "done"
                                                        ? "/images/new-home/icons/check.svg"
                                                        : "/images/new-home/icons/loading-01.svg"
                                                }
                                                width={16}
                                                height={16}
                                                alt={
                                                    item.status === "done"
                                                        ? "Done"
                                                        : "In progress"
                                                }
                                            />
                                            <div className="tagline">
                                                {item.status === "done"
                                                    ? t("Done")
                                                    : t("In progress")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-8 md:mb-20">
                                        <div className="-my-10 -mx-15">
                                            <Image
                                                className="w-full"
                                                src={item.imageUrl}
                                                width={628}
                                                height={426}
                                                alt={t(item.title)}
                                            />
                                        </div>
                                    </div>
                                    <h4 className="h4 mb-4">{t(item.title)}</h4>
                                    {item.items ? (
                                        <div className="space-y-4">
                                            {item.items.map((subItem, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <h5 className="subtitle-2 text-n-1">{t(subItem.title)}</h5>
                                                    <p className="body-2 text-n-4">{t(subItem.description)}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="body-2 text-n-4">{t(item.text)}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Gradient background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div 
                    className="absolute left-0 top-0"
                    style={gradientStyle}
                >
                    <Image
                        className="w-[58.85rem] opacity-60 mix-blend-color-dodge"
                        src="/images/new-home/gradient.png"
                        width={942}
                        height={942}
                        alt="Gradient"
                        priority
                    />
                </div>
            </div>
        </Section>
    );
};

export default Features2;
