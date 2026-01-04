<template>
    <div id="nepSweeper-optionsWrapper">
        <select
            name="nepSweeper-zoomSelect"
            id="nepSweeper-zoomSelect"
            v-model="currentZoomLevel"
            @change="handleZoomSelect"
        >
            <template v-for="(zoomSetting, index) in mediaZoomLevels" :key="index">
                <option :value="zoomSetting.name">
                    {{ zoomSetting.name }}
                </option>
            </template>
        </select>
        <select
            name="nepSweeper-difficultySelect"
            id="nepSweeper-difficultySelect"
            v-model="currentDifficulty"
            @change="handleDifficultySelect"
        >
            <option
                v-for="difficulty in difficulties"
                :key="difficulty.name"
                :value="difficulty.name"
            >
                {{ difficulty.name }}
            </option>
        </select>
        <select
            name="nepSweeper-spriteSheetSelect"
            id="nepSweeper-spriteSheetSelect"
            v-model="currentSpriteSheet"
            @change="handleSpriteSheetSelect"
        >
            <option
                v-for="spriteSheet in spriteSheets"
                :key="spriteSheet.name"
                :value="spriteSheet.name"
            >
                {{ spriteSheet.name }}
            </option>
        </select>
        <button
            name="nepSweeper-leaderBoardButton"
            id="nepSweeper-leaderBoardButton"
            @click="toggleLeaderBoard"
        >
            leaderboard
        </button>
    </div>
    <div id="nepSweeper-gameWrapper">
        <div
            class="nepSweeper-gameContainer"
            :style="{
                height: (yLength * 16 + 62) * currentSpriteSheetZoomScale + 'px',
                width: (xLength * 16 + 20) * currentSpriteSheetZoomScale + 'px',
            }"
        >
            <div :class="gameSpriteClass" class="topLeftCornerBorder"></div>
            <div
                v-for="n in xLength"
                :key="n"
                :class="gameSpriteClass"
                class="horizontalBorder"
            ></div>
            <div :class="gameSpriteClass" class="topRightCornerBorder"></div>
            <div :class="gameSpriteClass" class="longVerticalBorder"></div>
            <div :class="mineContainerClass">
                <div :class="[gameSpriteClass, firstMineNumberClass]"></div>
                <div :class="[gameSpriteClass, secondMineNumberClass]"></div>
                <div :class="[gameSpriteClass, thirdMineNumberClass]"></div>
            </div>
            <div
                :class="[gameSpriteClass, masterButtonClass]"
                :style="{ margin: masterButtonMargin }"
                @mousedown="handleMasterButtonMouseDown"
                @mouseup="handleMasterButtonMouseUp"
            ></div>
            <div :class="timeContainerClass">
                <div :class="[gameSpriteClass, firstTimeNumberClass]"></div>
                <div :class="[gameSpriteClass, secondTimeNumberClass]"></div>
                <div :class="[gameSpriteClass, thirdTimeNumberClass]"></div>
            </div>
            <div :class="gameSpriteClass" class="longVerticalBorder"></div>
            <div :class="gameSpriteClass" class="rightConnectionBorder"></div>
            <div
                v-for="n in xLength"
                :key="n"
                :class="gameSpriteClass"
                class="horizontalBorder"
            ></div>
            <div :class="gameSpriteClass" class="leftConnectionBorder"></div>
            <template v-for="(tile, index) in shownBoard" :key="index">
                <template v-if="index % xLength === 0">
                    <div :class="gameSpriteClass" class="verticalBorder"></div>
                    <div v-if="index !== 0" :class="gameSpriteClass" class="verticalBorder"></div>
                </template>
                <div
                    :class="[gameSpriteClass, `tile${tile}`]"
                    :tile="index"
                    @mousedown="handleTileMouseDown"
                    @mouseup="handleTileMouseUp"
                    @mouseout="handleTileMouseOut"
                    @mouseover="handleTileMouseOver"
                    @contextmenu="handleTileContextMenu"
                ></div>
                <div
                    v-if="index === xLength * yLength - 1"
                    :class="gameSpriteClass"
                    class="verticalBorder"
                ></div>
            </template>
            <div :class="gameSpriteClass" class="bottomLeftCornerBorder"></div>
            <div
                v-for="n in xLength"
                :key="n"
                :class="gameSpriteClass"
                class="horizontalBorder"
            ></div>
            <div :class="gameSpriteClass" class="bottomRightCornerBorder"></div>
        </div>
    </div>
    <div v-if="leaderBoardOpen" id="nepSweeper-leaderBoardWrapper">
        <div class="nepSweeper-leaderBoardScoresWrapper">
            <div
                v-for="(difficulty, index) in difficulties"
                :key="index"
                class="nepSweeper-leaderBoardDifficultyWrapper"
            >
                <h2 class="nepSweeper-leaderBoardDifficultyTitle">{{ difficulty.name }}</h2>
                <NepDifficultyScores :difficulty="difficulty.name" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/apps/nepSweeper/assets/nepSweeper.css';
import type {
    NepSweeperData,
    NepSweeperDifficulty,
    NepSweeperScoreObject,
    NepSweeperSpriteSheet,
    NepSweeperZoomLevel,
} from '@/apps/nepSweeper/interfaces/interfaces';
import NepDifficultyScores from './components/NepDifficultyScores.vue';

export default defineComponent({
    name: 'NepSweeper',
    components: {
        NepDifficultyScores,
    },
    data() {
        return {
            xLength: 30,
            yLength: 16,
            mines: 99,
            hiddenBoard: new Array(480).fill('') as string[],
            shownBoard: new Array(480).fill('') as string[],
            hiddenTiles: 480,
            minesLeft: 99,
            firstClick: true,
            firstClickTime: undefined,
            timeInterval: undefined,
            secondsSinceStart: 1,
            mouseHoverTile: undefined,
            markedHitMine: false,
            gameLost: false,
            gameOver: false,
            leftPressed: false,
            rightPressed: false,
            ctrlPressed: false,
            currentDifficulty: 'nepxpert',
            currentSpriteSheet: 'original',
            currentZoomLevel: '200%',
            currentZoomScale: 2,
            currentSpriteSheetZoomScale: 2,
            difficulties: [
                { name: 'beginnep', x: 9, y: 9, mines: 10 },
                { name: 'internepiate', x: 16, y: 16, mines: 40 },
                { name: 'nepxpert', x: 30, y: 16, mines: 99 },
            ] as NepSweeperDifficulty[],
            spriteSheets: [
                {
                    name: '3.0',
                    background: 'url(/assets/images/site/seamlessbackground.png) repeat',
                    sprites: new Map<number, string>([[2, '30-2.webp']]),
                },
                {
                    name: 'spookyjukes',
                    background: '#c88491',
                    sprites: new Map<number, string>([[1, 'jukessprite.png']]),
                },
                {
                    name: 'justanimated',
                    background: '#c762b8',
                    sprites: new Map<number, string>([
                        [1, 'justanimatedsprite.png'],
                        [2, 'justanimatedsprite2.webp'],
                    ]),
                },
                {
                    name: 'minimalist',
                    background: '#ffffff',
                    sprites: new Map<number, string>([
                        [1, 'minimalist.png'],
                        [2, 'minimalist2.png'],
                    ]),
                },
                {
                    name: 'original',
                    background: '#bdbdbd',
                    sprites: new Map<number, string>([
                        [1, 'original.gif'],
                        [2, 'original2.gif'],
                    ]),
                },
            ] as NepSweeperSpriteSheet[],
            zoomLevels: [
                { name: '100%', scale: 1, minMedia: '' },
                {
                    name: '150%',
                    scale: 1.5,
                    minMedia: '(min-width: 1270px) and (min-height: 720px)',
                },
                {
                    name: '200%',
                    scale: 2,
                    minMedia: '(min-width: 1500px) and (min-height: 900px)',
                },
                {
                    name: '250%',
                    scale: 2.5,
                    minMedia: '(min-width: 1750px) and (min-height: 1044px)',
                },
                {
                    name: '300%',
                    scale: 3,
                    minMedia: '(min-width: 2000px) and (min-height: 1280px)',
                },
            ] as NepSweeperZoomLevel[],
            translateZoomToScale: new Map<number, number>([
                [0.5, 100],
                [0.75, 66],
                [1, 50],
                [1.25, 40],
                [1.5, 33],
                [2, 24.5],
                [2.5, 20.5],
                [3, 16.7],
            ]),
            leaderBoardOpen: false,
            masterButtonClass: 'masterButton',
        } as NepSweeperData;
    },
    computed: {
        mediaZoomLevels(): NepSweeperZoomLevel[] {
            return this.zoomLevels.filter(
                (zoomLevel) => window.matchMedia(zoomLevel.minMedia).matches,
            );
        },
        gameSpriteClass(): string {
            return `gameSprite${this.currentSpriteSheetZoomScale}`;
        },
        mineContainerClass(): string {
            return `mineContainer${this.currentSpriteSheetZoomScale}`;
        },
        timeContainerClass(): string {
            return `timeContainer${this.currentSpriteSheetZoomScale}`;
        },
        masterButtonMargin(): string {
            let horizontalMargin = (this.xLength - 8) * 8;
            horizontalMargin = horizontalMargin < 0 ? 0 : horizontalMargin;
            return (
                3 * this.currentSpriteSheetZoomScale +
                'px ' +
                horizontalMargin * this.currentSpriteSheetZoomScale +
                'px'
            );
        },
        firstMineNumberClass(): string {
            if (this.minesLeft >= 0) {
                return `counter${Math.floor((this.minesLeft / 10 / 10) % 10)}`;
            }
            return 'counter-';
        },
        secondMineNumberClass(): string {
            if (this.minesLeft >= 0) {
                return `counter${Math.floor((this.minesLeft / 10) % 10)}`;
            }
            return `counter${Math.floor(((this.minesLeft * -1) / 10) % 10)}`;
        },
        thirdMineNumberClass(): string {
            if (this.minesLeft >= 0) {
                return `counter${Math.floor(this.minesLeft % 10)}`;
            }
            return `counter${Math.floor((this.minesLeft * -1) % 10)}`;
        },
        firstTimeNumberClass(): string {
            if (this.firstClickTime) {
                if (this.secondsSinceStart < 999) {
                    return `counter${Math.floor((this.secondsSinceStart / 10 / 10) % 10)}`;
                }
                return 'counter9';
            }
            return 'counter0';
        },
        secondTimeNumberClass(): string {
            if (this.firstClickTime) {
                if (this.secondsSinceStart < 999) {
                    return `counter${Math.floor((this.secondsSinceStart / 10) % 10)}`;
                }
                return 'counter9';
            }
            return 'counter0';
        },
        thirdTimeNumberClass(): string {
            if (this.firstClickTime) {
                if (this.secondsSinceStart < 999) {
                    return `counter${Math.floor(this.secondsSinceStart % 10)}`;
                }
                return 'counter9';
            }
            return 'counter0';
        },
    },
    beforeMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('contextmenu', this.handleContextMenu);
        window.addEventListener('mouseup', this.handleMouseUp);

        this.setDifficulty(this.$cookies.get('nepSweeperDifficulty'));
        this.setZoomLevel(
            this.$cookies.get('nepSweeperZoom'),
            this.$cookies.get('nepSweeperSpriteSheet'),
        );
    },
    mounted() {
        this.sanityCheck();
        this.resetBoard();
    },
    unmounted() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
        window.removeEventListener('contextmenu', this.handleContextMenu);
        window.removeEventListener('mouseup', this.handleMouseUp);
    },
    methods: {
        handleKeyDown(e: KeyboardEvent): void {
            if (e.key === ' ' && this.mouseHoverTile !== undefined && !this.gameOver) {
                if (
                    this.shownBoard[this.mouseHoverTile] === 'H' ||
                    this.shownBoard[this.mouseHoverTile] === 'F'
                ) {
                    this.flagTile(this.mouseHoverTile);
                } else {
                    this.exploreTile(this.mouseHoverTile);
                }
            } else if (e.key === 'F2') {
                this.resetBoard();
            } else if (e.key === 'Control') {
                this.ctrlPressed = true;
            }
        },
        handleKeyUp(e: KeyboardEvent): void {
            if (e.key === 'Control') {
                this.ctrlPressed = false;
            }
        },
        handleContextMenu(): void {
            this.resetButtons();
        },
        handleMouseUp(e: MouseEvent): void {
            if (e.button === 1) {
                // middle click
                this.leftPressed = false;
                this.rightPressed = false;
                this.resetMasterButton();
            } else if (e.button === 0) {
                // left click
                this.leftPressed = false;
                this.resetMasterButton();
            } else if (e.button === 2) {
                // right click
                this.rightPressed = false;
            }
        },
        handleTileMouseDown(e: MouseEvent): void {
            e.preventDefault();
            if (!this.gameOver) {
                const targetElement = e.target as HTMLDivElement;
                const tileIndex = parseInt(targetElement.getAttribute('tile') as string);
                if (e.button === 1) {
                    this.leftPressed = true;
                    this.rightPressed = true;
                    this.masterButtonClass = 'masterButtonO';
                    this.addPressedState(tileIndex);
                    return; // prevents the middle click scroll
                } else if (e.button === 0) {
                    if (this.ctrlPressed) {
                        this.flagTile(tileIndex);
                    } else {
                        this.leftPressed = true;
                        this.masterButtonClass = 'masterButtonO';
                        this.addPressedState(tileIndex);
                    }
                } else if (e.button === 2) {
                    if (!this.leftPressed) {
                        this.flagTile(tileIndex);
                    }
                    this.rightPressed = true;
                    this.addPressedState(tileIndex);
                }
            }
        },
        handleTileMouseUp(e: MouseEvent): void {
            if (!this.gameLost) {
                const targetElement = e.target as HTMLDivElement;
                const tileIndex = parseInt(targetElement.getAttribute('tile') as string);
                if (e.button === 1) {
                    // middle click
                    this.removePressedState(tileIndex);
                    if (this.leftPressed && this.rightPressed) {
                        this.exploreTile(tileIndex);
                    }
                    this.leftPressed = false;
                    this.rightPressed = false;
                    this.resetMasterButton();
                } else if (e.button === 0) {
                    // left click
                    this.removePressedState(tileIndex);
                    if (this.leftPressed && this.rightPressed) {
                        this.exploreTile(tileIndex);
                        this.rightPressed = false;
                    } else if (this.leftPressed && !this.ctrlPressed) {
                        this.clickTile(tileIndex);
                    }
                    this.leftPressed = false;
                    this.resetMasterButton();
                } else if (e.button === 2) {
                    // right click
                    this.removePressedState(tileIndex);
                    if (this.leftPressed && this.rightPressed) {
                        this.exploreTile(tileIndex);
                        this.leftPressed = false;
                        this.resetMasterButton();
                    }
                    this.rightPressed = false;
                }
            }
        },
        handleTileMouseOut(e: MouseEvent): void {
            const targetElement = e.target as HTMLDivElement;
            const tileIndex = parseInt(targetElement.getAttribute('tile') as string);
            this.removePressedState(tileIndex);
            this.mouseHoverTile = undefined;
        },
        handleTileMouseOver(e: MouseEvent): void {
            const targetElement = e.target as HTMLDivElement;
            this.mouseHoverTile = parseInt(targetElement.getAttribute('tile') as string);
            this.addPressedState(this.mouseHoverTile);
        },
        handleTileContextMenu(e: MouseEvent): void {
            e.preventDefault();
        },
        handleZoomSelect(e: Event): void {
            const target = e.target as HTMLOptionElement;
            this.setZoomLevel(target.value, this.currentSpriteSheet);
            target.blur();
        },
        handleDifficultySelect(e: Event): void {
            const target = e.target as HTMLOptionElement;
            this.setDifficulty(target.value);
            target.blur();
            this.resetBoard();
        },
        handleSpriteSheetSelect(e: Event): void {
            const target = e.target as HTMLOptionElement;
            this.setZoomLevel(this.currentZoomLevel, target.value);
            target.blur();
        },
        handleMasterButtonMouseDown(): void {
            this.masterButtonClass = 'masterButtonPressed';
        },
        handleMasterButtonMouseUp(): void {
            this.resetBoard();
        },
        resetButtons(): void {
            this.resetMasterButton();
            this.leftPressed = false;
            this.rightPressed = false;
            this.ctrlPressed = false;
        },
        initBoardArrays(): void {
            this.hiddenBoard = new Array(this.xLength * this.yLength).fill('') as string[];
            this.shownBoard = new Array(this.xLength * this.yLength).fill('') as string[];
            for (let i = 0; i < this.hiddenBoard.length; i++) {
                this.hiddenBoard[i] = i < this.mines ? 'M' : '0';
                this.shownBoard[i] = 'H';
            }
        },
        setDifficulty(difficultyName: string): void {
            if (!difficultyName) {
                return;
            }
            const newDifficulty = this.difficulties.find((diff) => diff.name === difficultyName);

            if (newDifficulty) {
                this.xLength = newDifficulty.x;
                this.yLength = newDifficulty.y;
                this.mines = newDifficulty.mines;
                this.currentDifficulty = newDifficulty.name;
                this.$cookies.set('nepSweeperDifficulty', newDifficulty.name);
            }
            this.resetBoard();
        },
        setZoomLevel(zoomLevel: string, spriteSheetName: string): void {
            if (!zoomLevel) {
                zoomLevel = this.currentZoomLevel;
            }
            const newZoomLevel = this.zoomLevels.find(
                (zoomSetting) => zoomSetting.name === zoomLevel,
            );
            if (newZoomLevel) {
                const root = document.querySelector<HTMLElement>(':root') as HTMLElement;
                this.currentZoomLevel = newZoomLevel.name;
                this.currentZoomScale = newZoomLevel.scale;
                this.setSpriteSheet(spriteSheetName);
                let zoomScale = newZoomLevel.scale / this.currentSpriteSheetZoomScale;
                zoomScale = zoomScale <= 0 ? 0.5 : zoomScale;
                root.style.setProperty(
                    '--nepSweeper-zoomLevel',
                    `scale(${zoomScale}) translate(-${this.translateZoomToScale.get(zoomScale)}%, -${this.translateZoomToScale.get(zoomScale)}%)`,
                );
                this.$cookies.set('nepSweeperZoom', newZoomLevel.name);
            }
        },
        setSpriteSheet(spriteSheetName: string): void {
            if (!spriteSheetName) {
                spriteSheetName = this.currentSpriteSheet;
            }
            const newSpriteSheet = this.spriteSheets.find(
                (spriteSheet) => spriteSheet.name === spriteSheetName,
            );
            if (newSpriteSheet) {
                const root = document.querySelector<HTMLElement>(':root') as HTMLElement;
                const closestSprite = this.getClosestSpriteSheet(newSpriteSheet);
                root.style.setProperty(
                    '--nepSweeper-sprite-sheet',
                    `url(/assets/images/nepsweeper/${closestSprite})`,
                );
                root.style.setProperty(
                    '--nepSweeper-sprite-sheet-background',
                    newSpriteSheet.background,
                );
                this.currentSpriteSheet = newSpriteSheet.name;
                this.$cookies.set('nepSweeperSpriteSheet', newSpriteSheet.name);
            }
        },
        getClosestSpriteSheet(spriteSheetConfig: NepSweeperSpriteSheet): string {
            if (this.currentZoomScale in spriteSheetConfig.sprites) {
                this.currentSpriteSheetZoomScale = this.currentZoomScale;
                return spriteSheetConfig.sprites.get(this.currentZoomScale) as string;
            }
            if (spriteSheetConfig.sprites.size === 1) {
                const spriteSheet = spriteSheetConfig.sprites.keys().next().value as number;
                this.currentSpriteSheetZoomScale = spriteSheet;
                return spriteSheetConfig.sprites.get(spriteSheet) as string;
            }
            const availableSpriteSheets = [...spriteSheetConfig.sprites.keys()].sort();
            let foundSpriteSheet = availableSpriteSheets.find((key) => {
                return key > this.currentZoomScale;
            });
            if (foundSpriteSheet === undefined) {
                availableSpriteSheets.reverse();
                foundSpriteSheet = availableSpriteSheets.find((key) => {
                    return key < this.currentZoomScale;
                });
            }
            this.currentSpriteSheetZoomScale = foundSpriteSheet as number;
            return spriteSheetConfig.sprites.get(this.currentSpriteSheetZoomScale) as string;
        },
        createNewGameBoard(clickedIndex: number): void {
            // shuffle the array
            for (let i = this.hiddenBoard.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = this.hiddenBoard[i];
                this.hiddenBoard[i] = this.hiddenBoard[j];
                this.hiddenBoard[j] = temp;
            }
            // increment numbers next to mines
            for (let i = 0; i < this.hiddenBoard.length; i++) {
                if (this.hiddenBoard[i] === 'M') {
                    this.incrementSurroundingTiles(i, [], false);
                }
            }
            // replace any surrounded mines
            for (let i = 0; i < this.hiddenBoard.length; i++) {
                if (this.hiddenBoard[i] === 'M') {
                    this.replaceStuckMine(i);
                }
            }
            // make sure that the initial tile is a 0
            if (this.hiddenBoard[clickedIndex] !== '0') {
                const surroundingIndices = this.getSurroundingIndices(clickedIndex);
                const skipIndices = [...surroundingIndices, clickedIndex];
                if (this.hiddenBoard[clickedIndex] === 'M') {
                    this.replaceMine(clickedIndex, [clickedIndex]);
                }
                surroundingIndices.forEach((index: number) => {
                    if (this.hiddenBoard[index] === 'M') {
                        this.replaceMine(index, skipIndices);
                    }
                });
            }
            this.firstClick = false;
            this.firstClickTime = this.$dayjs();
            // Make sure the timer always starts on 1
            this.firstClickTime.subtract(1, 's');
            this.timeInterval = setInterval(this.recordSeconds, 1000);
        },
        replaceStuckMine(tileIndex: number): void {
            const surroundingIndices = this.getSurroundingIndices(tileIndex);
            for (let i = 0; i < surroundingIndices.length; i++) {
                if (this.hiddenBoard[i] !== 'M') {
                    return;
                }
            }
            this.replaceMine(tileIndex, [...surroundingIndices, tileIndex]);
        },
        incrementSurroundingTiles(
            tileIndex: number,
            skipIndices: number[] = [],
            replace: boolean = true,
        ): void {
            const surroundingIndices = this.getSurroundingIndices(tileIndex);
            let surroundingMineCounter = 0;
            surroundingIndices.forEach((index) => {
                if (this.hiddenBoard[index] === 'M') {
                    surroundingMineCounter++;
                } else {
                    this.hiddenBoard[index] = (parseInt(this.hiddenBoard[index]) + 1).toString();
                }
            });
            // prevent mines completely surrounded by other mines
            if (surroundingMineCounter === surroundingIndices.length && replace) {
                this.replaceMine(tileIndex, [...skipIndices, tileIndex]);
            }
        },
        replaceMine(tileIndex: number, skipIndices: number[] = []): void {
            const newMineIndex = this.getRandomEmptyIndex(skipIndices);
            if (newMineIndex !== null) {
                const surroundingIndices = this.getSurroundingIndices(tileIndex);
                let newTile = 0;
                surroundingIndices.forEach((index: number) => {
                    if (this.hiddenBoard[index] !== 'M') {
                        this.hiddenBoard[index] = (
                            parseInt(this.hiddenBoard[index]) - 1
                        ).toString();
                    } else {
                        newTile++;
                    }
                });
                this.hiddenBoard[tileIndex] = newTile.toString();
                this.hiddenBoard[newMineIndex] = 'M';
                this.incrementSurroundingTiles(newMineIndex, [...skipIndices]);
            }
        },
        getRandomEmptyIndex(skipIndices: number[] = []): number | null {
            let emptyIndices = this.hiddenBoard.reduce((indices: number[], tile, index) => {
                if (tile !== 'M') {
                    indices.push(index);
                }

                return indices;
            }, []);
            if (skipIndices.length) {
                emptyIndices = emptyIndices.filter((index) => !skipIndices.includes(index));
            }
            if (emptyIndices.length > 0) {
                return emptyIndices[(emptyIndices.length * Math.random()) | 0];
            }
            return null;
        },
        getSurroundingIndices(index: number): number[] {
            const existingIndexes = [];
            if (index % this.xLength != 0) {
                if (index - this.xLength - 1 >= 0) {
                    existingIndexes.push(index - this.xLength - 1);
                }
                if (index - 1 >= 0) {
                    existingIndexes.push(index - 1);
                }
                if (index + this.xLength - 1 < this.hiddenBoard.length) {
                    existingIndexes.push(index + this.xLength - 1);
                }
            }
            if (index % this.xLength != this.xLength - 1) {
                if (index - this.xLength + 1 >= 0) {
                    existingIndexes.push(index - this.xLength + 1);
                }
                if (index + 1 >= 0) {
                    existingIndexes.push(index + 1);
                }
                if (index + this.xLength + 1 < this.hiddenBoard.length) {
                    existingIndexes.push(index + this.xLength + 1);
                }
            }
            if (index - this.xLength >= 0) {
                existingIndexes.push(index - this.xLength);
            }
            if (index + this.xLength < this.hiddenBoard.length) {
                existingIndexes.push(index + this.xLength);
            }
            return existingIndexes;
        },
        clickTile(clickedIndex: number): void {
            if (this.firstClick) {
                this.createNewGameBoard(clickedIndex);
            }
            this.revealTile(clickedIndex);
            this.checkGameState();
        },
        revealTile(tileIndex: number): void {
            if (this.shownBoard[tileIndex] === 'H') {
                this.shownBoard[tileIndex] = this.hiddenBoard[tileIndex];
                if (this.hiddenBoard[tileIndex] === '0') {
                    const surroundingIndices = this.getSurroundingIndices(tileIndex);
                    surroundingIndices.forEach((index) => {
                        this.revealTile(index);
                    });
                }
                if (this.hiddenBoard[tileIndex] === 'M') {
                    this.gameLost = true;
                    if (this.markedHitMine === false) {
                        this.markedHitMine = true;
                        this.shownBoard[tileIndex] = 'MWrong';
                    } else {
                        this.shownBoard[tileIndex] = 'MCross';
                    }
                }
                this.hiddenTiles--;
            }
        },
        revealRemainingMines(): void {
            this.hiddenBoard.forEach((tile, index) => {
                if (tile === 'M' && this.shownBoard[index] === 'H') {
                    if (!this.gameLost) {
                        this.shownBoard[index] = 'F';
                    } else {
                        this.shownBoard[index] = 'M';
                    }
                } else if (tile !== 'M' && this.shownBoard[index] === 'F') {
                    this.shownBoard[index] = 'MCross';
                }
            });
        },
        flagTile(clickedIndex: number): void {
            if (!this.gameLost) {
                if (this.shownBoard[clickedIndex] === 'H') {
                    this.shownBoard[clickedIndex] = 'F';
                    this.minesLeft--;
                    this.hiddenTiles--;
                } else if (this.shownBoard[clickedIndex] === 'F') {
                    this.shownBoard[clickedIndex] = 'H';
                    this.minesLeft++;
                    this.hiddenTiles++;
                }
            }
        },
        exploreTile(clickedIndex: number): void {
            if ((!parseInt(this.shownBoard[clickedIndex]) as unknown as number) > 0) {
                return;
            }
            const surroundingIndices = this.getSurroundingIndices(clickedIndex);
            let mineCount = 0;
            surroundingIndices.forEach((index: number) => {
                if (this.shownBoard[index] === 'F') {
                    mineCount++;
                }
            });
            if (mineCount !== parseInt(this.shownBoard[clickedIndex])) {
                return;
            }
            surroundingIndices.forEach((index: number) => {
                this.revealTile(index);
            });
            this.checkGameState();
        },
        sanityCheck(): void {
            if (this.xLength < 8) {
                this.xLength = 8;
            }
            if (this.yLength < 1) {
                this.yLength = 1;
            }
            this.hiddenBoard = new Array(this.xLength * this.yLength);
            this.shownBoard = new Array(this.xLength * this.yLength);
            this.hiddenTiles = this.xLength * this.yLength;
            if (this.mines > this.hiddenTiles - 1) {
                this.mines = this.hiddenTiles - 1;
            }
        },
        toggleLeaderBoard(): void {
            this.leaderBoardOpen = !this.leaderBoardOpen;
        },
        closeLeaderBoard(): void {
            this.leaderBoardOpen = false;
        },
        resetMasterButton(): void {
            if (this.gameLost) {
                this.masterButtonClass = 'masterButtonLose';
            } else if (this.gameOver) {
                this.masterButtonClass = 'masterButtonWin';
            } else {
                this.masterButtonClass = 'masterButton';
            }
        },
        addPressedState(tileIndex: number): void {
            if (!this.gameLost) {
                if (this.leftPressed) {
                    const tile = document.querySelector<HTMLDivElement>(
                        `[tile="${tileIndex}"]`,
                    ) as HTMLDivElement;
                    tile.classList.add('pressed');
                }
                if (this.leftPressed && this.rightPressed && this.mouseHoverTile) {
                    const surroundingIndices = this.getSurroundingIndices(this.mouseHoverTile);
                    surroundingIndices.forEach((index) => {
                        const tile = document.querySelector<HTMLDivElement>(
                            `[tile="${index}"]`,
                        ) as HTMLDivElement;
                        tile.classList.add('pressed');
                    });
                }
            }
        },
        removePressedState(tileIndex: number): void {
            const tile = document.querySelector<HTMLDivElement>(
                `[tile="${tileIndex}"]`,
            ) as HTMLDivElement;
            tile.classList.remove('pressed');
            const surroundingIndices = this.getSurroundingIndices(tileIndex);
            surroundingIndices.forEach((index: number) => {
                const tile = document.querySelector<HTMLDivElement>(
                    `[tile="${index}"]`,
                ) as HTMLDivElement;
                tile.classList.remove('pressed');
            });
        },
        checkGameState(): void {
            if (this.gameLost) {
                this.masterButtonClass = 'masterButtonLose';
                this.gameEnd();
            } else if (this.minesLeft === this.hiddenTiles) {
                this.masterButtonClass = 'masterButtonWin';
                this.minesLeft = 0;
                this.saveScore();
                this.gameEnd();
            }
        },
        recordSeconds(): void {
            this.secondsSinceStart = this.$dayjs().diff(this.firstClickTime, 's') + 1;
        },
        gameEnd(): void {
            this.gameOver = true;
            this.revealRemainingMines();
            clearInterval(this.timeInterval);
        },
        saveScore(): void {
            let difficultyData = this.$cookies.get(this.currentDifficulty);
            if (!Array.isArray(difficultyData)) {
                difficultyData = [];
            }
            difficultyData.push(this.createScoreObject());
            difficultyData.sort((a: NepSweeperScoreObject, b: NepSweeperScoreObject) => {
                if (a.time < b.time) {
                    return -1;
                }
                if (a.time > b.time) {
                    return 1;
                }
                if (a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
            });
            while (difficultyData.length > 10) {
                difficultyData = difficultyData.slice(0, 10);
            }
            this.$cookies.set(this.currentDifficulty, JSON.stringify(difficultyData));
        },
        createScoreObject(): NepSweeperScoreObject {
            return {
                time: this.secondsSinceStart,
                date: this.$dayjs().format('MMM DD YYYY HH:mm:ss'),
            } as NepSweeperScoreObject;
        },
        resetBoard(): void {
            this.initBoardArrays();
            this.firstClick = true;
            this.firstClickTime = undefined;
            this.minesLeft = this.mines;
            this.gameLost = false;
            this.gameOver = false;
            this.markedHitMine = false;
            this.secondsSinceStart = 1;
            this.hiddenTiles = this.xLength * this.yLength;
            clearInterval(this.timeInterval);
            this.resetMasterButton();
            this.resetButtons();
        },
    },
});
</script>
