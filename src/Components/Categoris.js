import styled from "styled-components";

const StyledButton = styled.button`
    outline: none;
    border: 1px solid #222;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover{
        background-color: #333;
        color: #fff;
    }
`;
const Categoris = ({categoris,onSelect}) => {
    return (
        <div className="category">
            <h1>"오늘도 FliQ 한 판?"</h1>
            <div className="category-wrap">
                {
                    categoris.map((item, idx)=>{
                        return <StyledButton key={idx} onClick={()=>{onSelect(item)}}>{item}</StyledButton>;
                    })
                }
            </div>
        </div>
    );
};

export default Categoris;