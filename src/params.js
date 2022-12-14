import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //proportional superior panel of screen
    difficultLevel: 0.1,
    getColumnsAmount(){//calcula quantidade de colunas
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize);
    },
    getRowsAmount(){//calcula quantidade de colunas
        const totalHeight = Dimensions.get('window').height;
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize);
    },
}

export default params;