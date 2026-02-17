import React from 'react';
import {Title, FilterCheckbox, CheckboxFiltersGroup} from "@/components/shared";
import {Input, RangeSlider} from "@/components/ui";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Фільтрація' size='sm' className='mb-5 font-bold'/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можна зібрати" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ціна від і до:</p>

                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" placeholder="1000" min={100} max={1000} defaultValue={1000}/>
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солені огірочки',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томати',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солені огірочки',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томати',
                        value: '6',
                    },
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солені огірочки',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томати',
                        value: '6',
                    },
                ]}
            />
        </div>
    )
}