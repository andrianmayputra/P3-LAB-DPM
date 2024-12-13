import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class FutsalField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamAScore: 0,
      teamBScore: 0,
      gameStarted: false,
    };
  }

  componentDidMount() {
    console.log("Lapangan futsal telah dimuat!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.teamAScore !== this.state.teamAScore || prevState.teamBScore !== this.state.teamBScore) {
      console.log(`Skor terbaru: Tim A - ${this.state.teamAScore}, Tim B - ${this.state.teamBScore}`);
    }
  }

  componentWillUnmount() {
    console.log("Lapangan futsal akan dibersihkan.");
  }

  startGame = () => {
    this.setState({ gameStarted: true });
    console.log("Game dimulai!");
  }

  scoreGoal = (team) => {
    if (team === 'A') {
      this.setState((prevState) => ({ teamAScore: prevState.teamAScore + 1 }));
    } else if (team === 'B') {
      this.setState((prevState) => ({ teamBScore: prevState.teamBScore + 1 }));
    }
  }

  render() {
    const { teamAScore, teamBScore, gameStarted } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lapangan Futsal</Text>
        <View style={styles.field}>
          <View style={styles.teamSide}>
            <Text style={styles.teamName}>Tim A</Text>
            <Text style={styles.score}>{teamAScore}</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.centerText}>{gameStarted ? "Pertandingan Berlangsung" : "Siapkan Pertandingan"}</Text>
          </View>
          <View style={styles.teamSide}>
            <Text style={styles.teamName}>Tim B</Text>
            <Text style={styles.score}>{teamBScore}</Text>
          </View>
        </View>

        {!gameStarted ? (
          <Button title="Mulai Pertandingan" onPress={this.startGame} />
        ) : (
          <>
            <Button title="Gol Tim A" onPress={() => this.scoreGoal('A')} />
            <Button title="Gol Tim B" onPress={() => this.scoreGoal('B')} />
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  field: {
    width: '90%',
    height: 300,
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FutsalField;
