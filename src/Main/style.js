import styled from "styled-components";

const Nav = styled.div`
section{
  /* min-height: 100vh;
  width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0 0.5rem;
  z-index: -10;
}
section.dark{
  background: #24292D;
}
section .container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.5rem;
  height: 220px;
  max-width: 560px;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: relative;
  
}
section.dark .container{
  background: #323840;
}
section .container .icons i{
  position: absolute;
  right: 17px;
  top: 17px;
  height: 30px;
  width: 30px;
  background: #24292D;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
}
section.dark .container .icons i{
  background: #fff;
  color: #323840;
}
.container .icons i.fa-sun{
  opacity: 0;
  pointer-events: none;
}
section.dark .container .icons i.fa-sun{
  opacity: 1;
  pointer-events: auto;
  font-size: 16px;
}
section .container .time{
  display: flex;
  align-items: center;
}
.container .time .time-colon{
  display: flex;
  align-items: center;
  position: relative;
}
.time .time-colon .am_pm{
  position: absolute;
  top: 0;
  right: -0.5rem;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
}
section.dark .time .time-colon .am_pm{
  color: #fff;
}
.time .time-colon .time-text{
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #F0F8FF;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
section.dark .time .time-colon .time-text{
  background: #24292D;
}
.time .time-colon .time-text,
.time .time-colon .colon{
  font-size: 35px;
  font-weight: 600;
}
section.dark .time .time-text .num,
section.dark .time .colon{
  color: #fff;
}
.time .time-colon .colon{
  font-size: 40px;
  margin: 0 10px;
}
.time .time-colon .time-text .text{
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}
section.dark  .time .time-colon .text{
  color: #fff;
}

`

const Card = styled.div`
`

export { Nav, Card}