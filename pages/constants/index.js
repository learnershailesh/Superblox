export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  XDAI: 100,
  BSC: 56,
  BSC_TESTNET: 97,
  ARBITRUM: 79377087078960,
  MOONBASE: 1287,
  AVALANCHE: 43114,
  FUJI: 43113,
  HECO: 128,
  HECO_TESTNET: 256,
  HARMONY: 1666600000,
  HARMONY_TESTNET: 1666700000,
};

export const contractAddress = {
  [ChainId["MAINNET"]]: "0x1622ddfe621F5a3fB43a95cD575fc164A7e6c158",
  [ChainId["RINKEBY"]]: "0x1B98525133E238A13D7d7BF0Fe83ec5eFa8F69dC",
};

export const mainNetworkChainId = ChainId.MAINNET;

export const NetworkContextName = "NETWORK";

export const ErrorMessages = {
  "-32002":
    "Already processing Metamask wallet connect. Please confirm metamask modal.",
};

export const ApplicationModal = {
  WALLET: 1,
  MINDMAP: 2,
  GALLERY: 3,
};

export const attributes = {
  Types: [
    "serA",
    "serB",
    "serC",
    "serD",
    "memA",
    "memB",
    "memC",
    "memD",
    "serZombie",
    "memZombie",
    "ape",
    "chimp",
    "gorilla",
    "alien",
  ],

  AccessoryA: [
    "fFaceTattoo",
    "mFaceTattoo",
    "fGmNeckTattoo",
    "mGmNeckTattoo",
    "fSwampNeckTattoo",
    "mSwampNeckTattoo",
    "fVibeNeckTattoo",
    "mVibeNeckTattoo",
    "fWagmiNeckTattoo",
    "mWagmiNeckTattoo",
    "fSleeveTattoo",
    "mSleeveTattoo",
    "scar",
    "none",
  ],

  AccessoryB: [
    "aeropod",
    "mBlunt",
    "fBlunt",
    "mJoint",
    "fJoint",
    "fCigar",
    "mCigar",
    "fVape",
    "mVape",
    "fWatch",
    "mWatch",
    "leatherChoker",
    "clothChoker",
    "none",
  ],

  Head: [
    "police",
    "cowboy1",
    "cowboy2",
    "cowboy3",
    "cowboy4",
    "cowboy5",
    "bandana1",
    "bandana2",
    "bandana3",
    "bandana4",
    "bandana5",
    "backTieA1",
    "backTieA2",
    "backTieA3",
    "backTieA4",
    "backTieA5",
    "backTieA6",
    "backTieA7",
    "backTieA8",
    "backTieA9",
    "backTieB1",
    "backTieB2",
    "backTieB3",
    "backTieB4",
    "backTieB5",
    "backTieB6",
    "backTieB7",
    "backTieB8",
    "backTieB9",
    "backTieC1",
    "backTieC2",
    "backTieC3",
    "backTieC4",
    "backTieC5",
    "backTieC6",
    "backTieC7",
    "backTieC8",
    "backTieC9",
    "backTieD1",
    "backTieD2",
    "backTieD3",
    "backTieD4",
    "backTieD5",
    "backTieD6",
    "backTieD7",
    "backTieD8",
    "backTieD9",
    "fCapA1",
    "fCapA2",
    "fCapA3",
    "fCapA4",
    "fCapA5",
    "fCapA6",
    "fCapA7",
    "fCapA8",
    "fCapA9",
    "fCapB1",
    "fCapB2",
    "fCapB3",
    "fCapB4",
    "fCapB5",
    "fCapB6",
    "fCapB7",
    "fCapB8",
    "fCapB9",
    "mCap1",
    "mCap2",
    "mCap3",
    "mCap4",
    "mCap5",
    "mCap6",
    "mCap7",
    "mCap8",
    "mCap9",
    "fCrazy1",
    "fCrazy2",
    "fCrazy3",
    "fCrazy4",
    "fCrazy5",
    "mCrazyA1",
    "mCrazyA2",
    "mCrazyA3",
    "mCrazyA4",
    "mCrazyA5",
    "mCrazyA6",
    "mCrazyA7",
    "mCrazyA8",
    "mCrazyB4",
    "mCrazyB5",
    "mCrazyB6",
    "mCrazyC7",
    "mCrazyC8",
    "mCrazyC9",
    "crazyCurl1",
    "crazyCurl2",
    "crazyCurl3",
    "crazyCurl4",
    "crazyCurl5",
    "crazyCurl6",
    "crazyCurl7",
    "crazyCurl8",
    "crazyCurl9",
    "crazyGrandma1",
    "crazyGrandma2",
    "crazyGrandma3",
    "crazyGrandma4",
    "crazyGrandma5",
    "crazyGrandma6",
    "crazyGrandma7",
    "crazyGrandma8",
    "crazyGrandma9",
    "crazyShort1",
    "crazyShort2",
    "crazyShort3",
    "crazyShort4",
    "crazyShort5",
    "crazyShort6",
    "crazyShort7",
    "crazyShort8",
    "crazyShort9",
    "curly1",
    "curly2",
    "curly3",
    "curly4",
    "curly5",
    "curly6",
    "curly7",
    "curly8",
    "curly9",
    "fDreadLock1",
    "fDreadLock2",
    "fDreadLock3",
    "fDreadLock4",
    "fDreadLock5",
    "mDreadLock1",
    "mDreadLock2",
    "mDreadLock3",
    "mDreadLock4",
    "mDreadLock5",
    "grandma1",
    "grandma2",
    "grandma3",
    "grandma4",
    "grandma5",
    "grandma6",
    "grandma7",
    "grandma8",
    "grandma9",
    "halfShave1",
    "halfShave2",
    "halfShave3",
    "halfShave4",
    "halfShave5",
    "halfShave6",
    "halfShave7",
    "halfShave8",
    "halfShave9",
    "fHelmetA1",
    "fHelmetA2",
    "fHelmetA3",
    "fHelmetA4",
    "fHelmetA5",
    "fHelmetB1",
    "fHelmetB2",
    "fHelmetB3",
    "fHelmetB4",
    "fHelmetB5",
    "mHelmetA1",
    "mHelmetA2",
    "mHelmetA3",
    "mHelmetA4",
    "mHelmetA5",
    "mHelmetA6",
    "mHelmetA7",
    "mHelmetA8",
    "mHelmetB1",
    "mHelmetB2",
    "mHelmetB3",
    "mHelmetB4",
    "mHelmetB5",
    "mHelmetB6",
    "mHelmetB7",
    "mHelmetB8",
    "long1",
    "long2",
    "long3",
    "lon4",
    "long5",
    "longBacktie1",
    "longBacktie2",
    "longBacktie3",
    "longBacktie4",
    "longBacktie5",
    "pigTails1",
    "pigTails2",
    "pigTails3",
    "pigTails4",
    "pigTails5",
    "samurai1",
    "samurai2",
    "samurai3",
    "samurai4",
    "samurai5",
    "sideHawk1",
    "sideHawk2",
    "sideHawk3",
    "sideHawk4",
    "sideHawk5",
    "straight1",
    "straight2",
    "straight3",
    "straight4",
    "straight5",
    "straightBack1",
    "straightBack2",
    "straightBack3",
    "straightBack4",
    "straightBack5",
    "mStraightBack1",
    "mStraightBack2",
    "mStraightBack3",
    "mStraightBack4",
    "mStraightBack5",
    "longPony1",
    "longPony2",
    "longPony3",
    "longPony4",
    "longPony5",
    "60s1",
    "60s2",
    "60s3",
    "60s4",
    "60s5",
    "80s1",
    "80s2",
    "80s3",
    "80s4",
    "80s5",
    "shortcurl1",
    "shortcurl2",
    "shortcurl3",
    "shortcurl4",
    "shortcurl5",
    "featherHat1",
    "featherHat2",
    "featherHat3",
    "featherHat4",
    "featherHat5",
    "flapCap1",
    "flapCap2",
    "flapCap3",
    "flapCap4",
    "flapCap5",
    "hunterHat1",
    "hunterHat2",
    "hunterHat3",
    "hunterHat4",
    "hunterHat5",
    "japanGo1",
    "japanGo2",
    "japanGo3",
    "japanGo4",
    "japanGo5",
    "mohawkA1",
    "mohawkA2",
    "mohawkA3",
    "mohawkA4",
    "mohawkA5",
    "mohawkB1",
    "mohawkB2",
    "mohawkB3",
    "mohawkB4",
    "mohawkB5",
    "shave1",
    "shave2",
    "shave3",
    "shave4",
    "shave5",
    "shortShave1",
    "shortShave2",
    "shortShave3",
    "shortShave4",
    "shortShave5",
    "bald",
  ],

  Eye: [
    "3D1",
    "3D2",
    "AR",
    "cool",
    "cornerEye",
    "doubleEye",
    "sleepy",
    "eng",
    "flatop",
    "goggle1",
    "goggle2",
    "goggle3",
    "goggle4",
    "goggle5",
    "nounish1",
    "nounish2",
    "nounish3",
    "nounish4",
    "nounish5",
    "nounish6",
    "nounish7",
    "nounish8",
    "nounish9",
    "nounish10",
    "3dNoun1",
    "3dNoun2",
    "3dNoun3",
    "3dNoun4",
    "3dNoun5",
    "pior1",
    "pior2",
    "pior3",
    "pior4",
    "pior5",
    "pixi1",
    "pixi2",
    "pixi3",
    "pixi4",
    "pixi5",
    "VR",
  ],

  Shoes: [
    "fBootsA1",
    "fBootsA2",
    "fBootsA3",
    "fBootsA4",
    "fBootsA5",
    "fBootsB1",
    "fBootsB2",
    "fBootsB3",
    "fBootsB4",
    "fBootsB5",
    "fBigBoots1",
    "fBigBoots2",
    "fBigBoots3",
    "fBigBoots4",
    "fBigBoots5",
    "fBootsC1",
    "fBootsC2",
    "fBootsC3",
    "fBootsC4",
    "fBootsC5",
    "fSlipA1",
    "fSlipA2",
    "fSlipA3",
    "fSlipA4",
    "fSlipA5",
    "fSucciA1",
    "fSucciA2",
    "fSucciA3",
    "fSucciA4",
    "fSucciA5",
    "fSucciB1",
    "fSucciB2",
    "fSucciB3",
    "fSucciB4",
    "fSucciB5",
    "fZadidas1",
    "fZadidas2",
    "fZadidas3",
    "fZadidas4",
    "fZadidas5",
    "fFlatA1",
    "fFlatA2",
    "fFlatA3",
    "fFlatA4",
    "fFlatA5",
    "fFlatB1",
    "fFlatB2",
    "fFlatB3",
    "fFlatB4",
    "fFlatB5",
    "fHighBoot1",
    "fHighBoot2",
    "fHighBoot3",
    "fHighBoot4",
    "fHighBoot5",
    "fHillA1",
    "fHillA2",
    "fHillA3",
    "fHillA4",
    "fHillA5",
    "fHillB1",
    "fHillB2",
    "fHillB3",
    "fHillB4",
    "fHillB5",
    "fSlipB1",
    "fSlipB2",
    "fSlipB3",
    "fSlipB4",
    "fSlipB5",
    "fOpenHill1",
    "fOpenHill2",
    "fOpenHill3",
    "fOpenHill4",
    "fOpenHill5",
    "fSneakerA1",
    "fSneakerA2",
    "fSneakerA3",
    "fSneakerA4",
    "fSneakerA5",
    "fSneakerB1",
    "fSneakerB2",
    "fSneakerB3",
    "fSneakerB4",
    "fSneakerB5",
    "fSneakerC1",
    "fSneakerC2",
    "fSneakerC3",
    "fSneakerC4",
    "fSneakerC5",
    "fUgh",
    "fUgh1",
    "fUgh2",
    "fUgh3",
    "fUgh4",
    "mSneakerA1",
    "mSneakerA2",
    "mSneakerA3",
    "mSneakerA4",
    "mSneakerA5",
    "mBlock1",
    "mBlock2",
    "mBlock3",
    "mBlock4",
    "mBlock5",
    "mBoot1",
    "mBoot2",
    "mBoot3",
    "mBoot4",
    "mBoot5",
    "mGraphic1",
    "mGraphic2",
    "mGraphic3",
    "mGraphic4",
    "mGraphic5",
    "mBootTall1",
    "mBootTall2",
    "mBootTall3",
    "mBootTall4",
    "mBootTall5",
    "mShoesF3T1",
    "mShoesF3T2",
    "mShoesF3T3",
    "mShoesF3T4",
    "mShoesF3T5",
    "mShoePixel1",
    "mShoePixel2",
    "mShoePixel3",
    "mShoePixel4",
    "mShoePixel5",
    "mShoePlain1",
    "mShoePlain2",
    "mShoePlain3",
    "mShoePlain4",
    "mShoePlain5",
    "mSlipA1",
    "mSlipA2",
    "mSlipA3",
    "mSlipA4",
    "mSlipA5",
    "mSlipA1",
    "mSlipA2",
    "mSlipA3",
    "mSlipA4",
    "mSlipA5",
    "mSlipB1",
    "mSlipB2",
    "mSlipB3",
    "mSlipB4",
    "mSlipB5",
    "mZucci1",
    "mZucci2",
    "mZucci3",
    "mZucci4",
    "mZucci5",
    "mSneaker1",
    "mSneaker2",
    "mSneaker3",
    "mSneaker4",
    "mSneaker5",
    "mSneakerPixel1",
    "mSneakerPixel2",
    "mSneakerPixel3",
    "mSneakerPixel4",
    "mSneakerPixel5",
    "mZadidas1",
    "mZadidas2",
    "mZadidas3",
    "mZadidas4",
    "mZadidas5",
    "mToneZadidas1",
    "mToneZadidas2",
    "mToneZadidas3",
    "mToneZadidas4",
    "mToneZadidas5",
  ],

  Bottom: [
    "fLongSkirt1",
    "fLongSkirt2",
    "fLongSkirt3",
    "fLongSkirt4",
    "fLongSkirt5",
    "fLongSkirt6",
    "fMiniSkirt1",
    "fMiniSkirt2",
    "fMiniSkirt3",
    "fMiniSkirt4",
    "fMiniSkirt5",
    "fMiniSkirt6",
    "fLargePant1",
    "fLargePant2",
    "fLargePant3",
    "fLargePant4",
    "fLargePant5",
    "fLargePant6",
    "fShortPant1",
    "fShortPant2",
    "fShortPant3",
    "fShortPant4",
    "fShortPant5",
    "fShortPant6",
    "fShort1",
    "fShort2",
    "fShort3",
    "fShort4",
    "fShort5",
    "fShort6",
    "fTearA1",
    "fTearA2",
    "fTearA3",
    "fTearA4",
    "fTearA5",
    "fTearA6",
    "fTearB1",
    "fTearB2",
    "fTearB3",
    "fTearB4",
    "fTearB5",
    "fTearB6",
    "fTearC1",
    "fTearC2",
    "fTearC3",
    "fTearC4",
    "fTearC5",
    "fTearC6",
    "fTearD1",
    "fTearD2",
    "fTearD3",
    "fTearD4",
    "fTearD5",
    "fTearD6",
    "fTight1",
    "fTight2",
    "fTight3",
    "fTight4",
    "fTight5",
    "fTight6",
    "fWide1",
    "fWide2",
    "fWide3",
    "fWide4",
    "fWide5",
    "fWide6",
    "mCargo1",
    "mCargo2",
    "mCargo3",
    "mCargo4",
    "mCargo5",
    "mCargo6",
    "mChino1",
    "mChino2",
    "mChino3",
    "mChino4",
    "mChino5",
    "mChino6",
    "mPantL1",
    "mPantL2",
    "mPantL3",
    "mPantL4",
    "mPantL5",
    "mPantL6",
    "mShorts1",
    "mShorts2",
    "mShorts3",
    "mShorts4",
    "mShorts5",
    "mShorts6",
    "mShortsTear1",
    "mShortsTear2",
    "mShortsTear3",
    "mShortsTear4",
    "mShortsTear5",
    "mShortsTear6",
    "mSlim1",
    "mSlim2",
    "mSlim3",
    "mSlim4",
    "mSlim5",
    "mSlim6",
    "mSlimL1",
    "mSlimL2",
    "mSlimL3",
    "mSlimL4",
    "mSlimL5",
    "mSlimL6",
    "mTearA1",
    "mTearA2",
    "mTearA3",
    "mTearA4",
    "mTearA5",
    "mTearA6",
    "mTearB1",
    "mTearB2",
    "mTearB3",
    "mTearB4",
    "mTearB5",
    "mTearB6",
    "mTearC1",
    "mTearC2",
    "mTearC3",
    "mTearC4",
    "mTearC5",
    "mTearC6",
    "mUnder2T1",
    "mUnder2T2",
    "mUnder2T3",
    "mUnder2T4",
    "mUnder2T5",
    "mUnder2T6",
    "mUnderWear1",
    "mUnderWear2",
    "mUnderWear3",
    "mUnderWear4",
    "mUnderWear5",
    "mUnderWear6",
  ],

  Jewelry: [
    "chain",
    "chainMid",
    "chainShort",
    "earrings",
    "leftEarring",
    "rightEarring",
    "earringLarge",
    "noseRing",
    "none",
  ],

  FacialHair: [
    "bikerStacheBlack",
    "bikerStacheBrown",
    "bikerStacheBlonde",
    "bikerStacheWhite",
    "weirdBeardBlack",
    "weirdBeardBrown",
    "weirdBeardBlonde",
    "weirdBeardWhite",
    "douche",
    "eng",
    "crazyBeardBlack",
    "crazyBeardBrown",
    "crazyBeardBlonde",
    "crazyBeardWhite",
    "papaLongBlack",
    "papaLongBrown",
    "papaLongBlonde",
    "papaLongWhite",
    "papaBlack",
    "papaBrown",
    "papaBlonde",
    "papaWhite",
    "fullBlack",
    "fullBrown",
    "fullBlonde",
    "fullWhite",
    "coolBeardBlack",
    "coolBeardBrown",
    "coolBeardBlonde",
    "coolBeardWhite",
    "oldStacheBlack",
    "oldStacheBrown",
    "oldStacheBlonde",
    "oldStacheWhite",
    "none",
  ],

  Mouth: [
    "flipsA",
    "fLipsB",
    "fLipsC",
    "fSmileA",
    "fSmileB",
    "fSmileC",
    "mLips",
    "none",
  ],

  Name: [
    "4156",
    "goldenApe",
    "Boney",
    "Claire",
    "Cozmo de'Medici",
    "David Horvath",
    "DCinvestor",
    "DeeZe",
    "medved",
    "greenApe",
    "gmoney",
    "gremplin",
    "marlo",
    "jaw",
    "The Mensch",
    "NYdoorman",
    "silverBack",
    "Sartoshi",
    "AL",
    "creepToad",
    "toadyHawk",
    "Louvi",
    "joker",
    "isaidelgoley",
    "moonDust",
    "nobi",
    "razorie",
    "shoshaGreen",
    "unsecretMan",
    "mfer",
    "nakedBro",
    "crimsonApe",
    "ring",
    "zombo",
    "ghost",
    "zomba",
    "zombu",
  ],

  Shirts: [
    "fOverallA1",
    "fOverallA2",
    "fOverallA3",
    "fOverallA4",
    "fOverallA5",
    "fOverallA6",
    "fOverallB1",
    "fOverallB2",
    "fOverallB3",
    "fOverallB4",
    "fOverallB5",
    "fOverallB6",
    "mOverallA1",
    "mOverallA2",
    "mOverallA3",
    "mOverallA4",
    "mOverallA5",
    "mOverallA6",
    "mOverallB1",
    "mOverallB2",
    "mOverallB3",
    "mOverallB4",
    "mOverallB5",
    "mOverallB6",
    "mOverall1",
    "mOverall2",
    "mOverall3",
    "mOverall4",
    "mOverall5",
    "mOverall6",
    "cropShort1",
    "cropShort2",
    "cropShort3",
    "cropShort4",
    "cropShort5",
    "cropShort6",
    "cropShort7",
    "cropShort8",
    "cropShort9",
    "cropTank1",
    "cropTank2",
    "cropTank3",
    "cropTank4",
    "cropTank5",
    "cropTank6",
    "cropTank7",
    "cropTank8",
    "cropTank9",
    "cropTop1",
    "cropTop2",
    "cropTop3",
    "cropTop4",
    "cropTop5",
    "cropTop6",
    "cropTop7",
    "cropTop8",
    "cropTop9",
    "fShirt1",
    "fShirt2",
    "fShirt3",
    "fShirt4",
    "fShirt5",
    "fShirt6",
    "fShirt7",
    "fShirt8",
    "fShirt9",
    "mShirtB1",
    "mShirtB2",
    "mShirtB3",
    "mShirtB4",
    "mShirtB5",
    "mShirtB6",
    "mShirtB7",
    "mShirtB8",
    "mShirtB9",
    "mShirtA1",
    "mShirtA2",
    "mShirtA3",
    "mShirtA4",
    "mShirtA5",
    "mShirtA6",
    "mShirtA7",
    "mShirtA8",
    "mShirtA9",
    "fTshirt1",
    "fTshirt2",
    "fTshirt3",
    "fTshirt4",
    "fTshirt5",
    "fTshirt6",
    "fTshirt7",
    "fTshirt8",
    "fTshirt9",
    "mTshirt1",
    "mTshirt2",
    "mTshirt3",
    "mTshirt4",
    "mTshirt5",
    "mTshirt6",
    "mTshirt7",
    "mTshirt8",
    "mTshirt9",
    "tank1",
    "tank2",
    "tank3",
    "tank4",
    "tank5",
    "tank6",
    "tank7",
    "tank8",
    "tank9",
    "tearA1",
    "tearA2",
    "tearA3",
    "tearA4",
    "tearA5",
    "tearA6",
    "tearA7",
    "tearA8",
    "tearA9",
    "tearB1",
    "tearB2",
    "tearB3",
    "tearB4",
    "tearB5",
    "tearB6",
    "tearB7",
    "tearB8",
    "tearB9",
    "tearC1",
    "tearC2",
    "tearC3",
    "tearC4",
    "tearC5",
    "tearC6",
    "tearC7",
    "tearC8",
    "tearC9",
    "mTur1",
    "mTur2",
    "mTur3",
    "mTur4",
    "mTur5",
    "mTur6",
    "mTur7",
    "mTur8",
    "mTur9",
    "fTur1",
    "fTur2",
    "fTur3",
    "fTur4",
    "fTur5",
    "fTur6",
    "fTur7",
    "fTur8",
    "fTur9",
    "dress1",
    "dress2",
    "dress3",
    "dress4",
    "dress5",
    "dress6",
    "dress7",
    "dress8",
    "dress9",
    "fHoodie1",
    "fHoodie2",
    "fHoodie3",
    "fHoodie4",
    "mHoodieA1",
    "mHoodieA2",
    "mHoodieA3",
    "mHoodieA4",
    "mHoodieB1",
    "mHoodieB2",
    "mHoodieB3",
    "mHoodieB4",
    "fTear1",
    "fTear2",
    "fTear3",
    "fTear4",
    "fTear5",
    "fTear6",
    "fTear7",
    "fTear8",
    "fTear9",
  ],
};

export const MoralisAPIKey = {
  serverUrl: "https://quere.com:2053/server",
  appId: "admin",
};
