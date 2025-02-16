import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TabSwitcherProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Sign Up' && styles.activeTab]}
        onPress={() => setActiveTab('Sign Up')}
      >
        <Text style={[styles.tabText, activeTab === 'Sign Up' && styles.activeTabText]}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'Log In' && styles.activeTab]}
        onPress={() => setActiveTab('Log In')}
      >
        <Text style={[styles.tabText, activeTab === 'Log In' && styles.activeTabText]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    padding: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TabSwitcher;
