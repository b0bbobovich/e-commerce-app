import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { sliderItems } from "../../data";
import {
    Container,
    Arrow,
    Wrapper,
    Slide,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Description,
    Button,
} from "./Slider.styled";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => 
                    
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt={item.alt} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                )}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider