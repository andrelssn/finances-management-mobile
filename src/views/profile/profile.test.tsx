import { cleanup, fireEvent } from '@testing-library/react-native';
import { renderRouter, screen } from 'expo-router/testing-library';

// Components
import Profile from '@/src/app/profile';
import Panel from '../../app/index';

describe("Button Component", () => {
    afterEach(() => {
        cleanup(); // limpa a cada teste
    });

    it("should render the link to the profile screen", () => {
        renderRouter({
            index: Panel
        })

        expect(screen.getByText("Go to Profile")).toBeTruthy();
    })

    it("should navigate to the /profile page when clicking the link", async () => {
        renderRouter({
            index: Panel,
            profile: Profile
        }, {
            initialUrl: "/" // url principal
        })

        fireEvent.press(screen.getByText("Go to Profile"));
        expect(await screen.findByText("Profile")).toBeTruthy();
    });
})

