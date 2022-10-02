import { PropsWithChildren } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const templateArea = `"header header"
"nav main"
"footer footer"`;

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid templateAreas={templateArea} gridTemplateColumns="0.25fr 1fr" gap="1">
      <GridItem pl="2" bg="orange.300" area="header">
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area="nav">
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area="main">
        {children}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default PageContainer;
