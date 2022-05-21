import { Text, Flex, Button, Center } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import GenreProvider from "./Store/GenreProvider";
import GenreContext from "./Store/genre-context";
import DATA from "./data.json";
import GenresStep from "./Components/GenresStep";
import SubgenresStep from "./Components/SubgenresStep";
import NewSubgenre from "./Components/NewSubgenre";
import Information from "./Components/Information";
import { useContext } from "react";

function App() {
  const state = useContext(GenreContext);
  const genres = DATA.genres;

  const steps = [
    { label: "Step 1", content: <GenresStep genresList={genres}></GenresStep> },
    {
      label: "Step 2",
      content: <SubgenresStep genresList={genres}></SubgenresStep>,
    },
    { label: "Step 3", content: <NewSubgenre></NewSubgenre> },
    { label: "Step 4", content: <Information></Information> },
  ];

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <GenreProvider>
      <Center>
        <Flex
          w="100%"
          maxW={800}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          my={20}
        >
          <Text mb={4}>Add book - New book</Text>
          <Flex flexDir="column" width="100%">
            <Steps activeStep={activeStep} mb={8}>
              {steps.map(({ label, content }) => (
                <Step label={label} key={label}>
                  {content}
                </Step>
              ))}
            </Steps>
            {activeStep === steps.length ? (
              <Flex p={4}>
                <Button mx="auto" size="sm" onClick={reset}>
                  Reset
                </Button>
              </Flex>
            ) : (
              <Flex width="100%" justify="flex-end">
                <Button
                  isDisabled={activeStep === 0}
                  mr={4}
                  onClick={prevStep}
                  size="sm"
                  variant="ghost"
                >
                  Prev
                </Button>
                <Button size="sm" onClick={nextStep}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Center>
    </GenreProvider>
  );
}

export default App;
