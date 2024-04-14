// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            // 스프레드 연산자 사용: name값이 변경되더라도 다른 프로퍼티 값들은 그대로 유지시키기 위해서
            ...input, 
            // []: 새로운 객체를 만들면서 []안의 변수의 값이 프로퍼티의 키로서 설정된다.
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div>
                <input 
                    name="name"
                    value={input.name}
                    onChange={onChange} 
                    placeholder={"이름을 입력하세요"} 
                />
                {input.name}
            </div>
            <div>
                <input 
                    name="birth"
                    value={input.birth} 
                    onChange={onChange} 
                    type="date" 
                />
                {input.birth}
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="uk">영국</option>
                    <option value="usa">미국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
                {input.bio}
            </div>
        </div>
    );
};

export default Register;