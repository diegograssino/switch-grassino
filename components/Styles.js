import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
  cardColor: {
    backgroundColor: colors.platinum,
  },
  cardWithBorder: {
    borderWidth: 2,
    borderColor: colors.black,
    padding: 10,
    borderRadius: 10,
    width: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCentered: {
    textAlign: 'center',
  },
  fontFamilyOpenSans: {
    fontFamily: 'open-sans',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  btn: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  screen1: {
    justifyContent: 'center',
  },
  choicesContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  verticalPadding: {
    paddingVertical: 20,
  },
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.platinum,
    fontSize: 22,
  },
});
