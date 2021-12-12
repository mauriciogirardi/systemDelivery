import { Footer } from "components/Footer";
import { CardProduct } from "components/CardProduct";
import { StepsHeader } from "components/StepsHeader";
import pizzaSVG from "assets/svgs/pizza.svg";
import * as S from "./styles";

export default function Order() {
  return (
    <>
      <StepsHeader />

      <S.Container>
        <S.Content>
          <CardProduct
            title="Pizza Frango Com Catupery"
            price="R$52,00"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae cum alias quaerat numquam amet quae tenetur laudantium commodi sequi dolore, iste culpa enim blanditiis minus deleniti vero maxime laborum."
            img={pizzaSVG}
          />

          <CardProduct
            title="Pizza Frango Com Catupery"
            price="R$52,00"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae cum alias quaerat numquam amet quae tenetur laudantium commodi sequi dolore, iste culpa enim blanditiis minus deleniti vero maxime laborum."
            img={pizzaSVG}
          />

          <CardProduct
            title="Pizza Frango Com Catupery"
            price="R$52,00"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae cum alias quaerat numquam amet quae tenetur laudantium commodi sequi dolore, iste culpa enim blanditiis minus deleniti vero maxime laborum."
            img={pizzaSVG}
          />

          <CardProduct
            title="Pizza Frango Com Catupery"
            price="R$52,00"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae cum alias quaerat numquam amet quae tenetur laudantium commodi sequi dolore, iste culpa enim blanditiis minus deleniti vero maxime laborum."
            img={pizzaSVG}
          />
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
}
