import { fireEvent, render } from '@testing-library/react-native';
import { Button } from './button';

describe("Button Component", () => {
    it("Should render the button", () => {
        const functionMock = jest.fn(); // Função mocada do jest, para testes
        const { getByText } = render(<Button title='button title' onPress={functionMock}/>)

        expect(getByText("button title")).toBeTruthy(); // Verifica se está presente por boolean
    })

    it("Should render the button onpress", () => {
        const functionMock = jest.fn(); // Função mocada do jest, para testes
        const { getByText, getByTestId } = render(<Button title='button title' onPress={functionMock}/>)

        expect(getByText("button title")).toBeTruthy(); // Verifica se texto do botão está correto
        fireEvent.press(getByTestId("button-test")); // Verifica se o id do botão selecionado está correto

        expect(functionMock).toHaveBeenCalled(); // verifica que a função foi chamada corretamente
    })
})

