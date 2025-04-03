'use client';

import Section from "@/components/newHome/section";
import Image from "@/components/newHome/image";
import Button from "@/components/newHome/button";
import Heading from "@/components/newHome/heading";
import { roadmap } from "@/components/newHome/mocks/roadmap";
import Tagline from "@/components/newHome/tagline/tagline";
import { useTranslation } from "react-i18next";

type RoadmapProps = {};

const Features2 = ({}: RoadmapProps) => {
    const { t } = useTranslation();
    
    return (
        <Section className="overflow-hidden">
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
                    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                            <Image
                                className="w-full"
                                src="/images/new-home/gradient.png"
                                width={942}
                                height={942}
                                alt="Gradient"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Features2;
