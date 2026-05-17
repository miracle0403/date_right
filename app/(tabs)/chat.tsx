import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GradientShell } from '@/components/design/GradientShell';
import { NeonButton } from '@/components/design/NeonButton';
import { AppColors, Radii } from '@/constants/app-theme';

const messages = [
  { id: '1', from: 'them', text: 'Your answer about repair stayed with me. What helps you soften after conflict?', time: '8:41' },
  { id: '2', from: 'me', text: 'Clarity first, then warmth. I relax when someone names what they meant without turning it into a trial.', time: '8:43' },
  { id: '3', from: 'them', text: 'That feels grounded. I like when honesty still has tenderness in it.', time: '8:45' },
];

export default function ChatScreen() {
  return (
    <GradientShell>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>N</Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.name}>Nova</Text>
            <Text style={styles.status}>typing with emotional effort</Text>
          </View>
          <Ionicons name="sparkles" size={22} color={AppColors.pink} />
        </View>

        <ScrollView contentContainerStyle={styles.messages} showsVerticalScrollIndicator={false}>
          <View style={styles.chemistryBanner}>
            <Ionicons name="flame" size={18} color={AppColors.rose} />
            <Text style={styles.chemistryText}>91% conversational chemistry · high reciprocity detected</Text>
          </View>

          {messages.map((message) => (
            <View key={message.id} style={[styles.bubble, message.from === 'me' ? styles.mine : styles.theirs]}>
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.time}>{message.time}</Text>
            </View>
          ))}

          <View style={styles.typing}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </ScrollView>

        <View style={styles.composer}>
          <TextInput
            placeholder="Answer with intention..."
            placeholderTextColor={AppColors.dim}
            style={styles.input}
            multiline
          />
          <NeonButton icon="send" label="Send" style={styles.send} />
        </View>
      </View>
    </GradientShell>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 58,
    paddingHorizontal: 18,
    paddingBottom: 96,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: Radii.xl,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    padding: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: AppColors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: AppColors.white,
    fontSize: 20,
    fontWeight: '900',
  },
  headerText: {
    flex: 1,
  },
  name: {
    color: AppColors.white,
    fontSize: 18,
    fontWeight: '900',
  },
  status: {
    color: AppColors.muted,
    fontSize: 12,
    marginTop: 3,
  },
  messages: {
    paddingVertical: 20,
    gap: 14,
  },
  chemistryBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,107,157,0.12)',
    borderColor: 'rgba(255,107,157,0.22)',
    borderWidth: 1,
    borderRadius: Radii.lg,
    padding: 14,
  },
  chemistryText: {
    color: AppColors.white,
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
  },
  bubble: {
    maxWidth: '84%',
    borderRadius: 24,
    padding: 15,
    gap: 8,
  },
  mine: {
    alignSelf: 'flex-end',
    backgroundColor: AppColors.pink,
    borderBottomRightRadius: 8,
  },
  theirs: {
    alignSelf: 'flex-start',
    backgroundColor: AppColors.panel,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderBottomLeftRadius: 8,
  },
  messageText: {
    color: AppColors.white,
    fontSize: 15,
    lineHeight: 22,
  },
  time: {
    color: 'rgba(255,255,255,0.62)',
    fontSize: 11,
    alignSelf: 'flex-end',
    fontWeight: '700',
  },
  typing: {
    width: 72,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: AppColors.violet,
  },
  composer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    minHeight: 52,
    maxHeight: 110,
    borderRadius: Radii.lg,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: AppColors.white,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  send: {
    width: 96,
  },
});
