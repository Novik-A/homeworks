import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import MultiRangeSlider from "./common/MultiRangeSlider/MultiRangeSlider";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({ min, max }: { min: number; max: number }) =>
                    (`min = ${min}, max = ${max}`)
                }
            />
            <hr/>
        </div>
    );
}

export default HW11;
