import { Box, Typography } from '@mui/material';
import {SellHistoryDelalizationData} from '../../../utils/constants.tsx'
import RubleIcon from '../../../assets/RubleIcon.svg?react'


export default function SellHistoryDelalization() {
    const styles = {
        container: {
          margin:'0 20px 0',
          background: 'linear-gradient(to right, #28C22E 0%, #197225 100%)',
          boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
          borderRadius: '16px',
          padding: '20px 20px 20px 16px',
          height:'100px'
        },
        title: {
            fontSize:"18px",
          fontFamily: 'Inter',
          color: '#F5F5F5',
          lineHeight: '1.33',
          fontWeight: '700',
          paddingBottom: '4px',
          textAlign: 'start'
        },
        subtitle: {
            fontSize:"16px",
            fontFamily: 'Inter',
            color: '#F5F5F5',
            lineHeight: '1.25',
            fontWeight: '400',
            paddingBottom: '16px',
            textAlign: 'start'
          },
          text: {
            fontSize:"14px",
            fontFamily: 'Inter',
            color: '#F5F5F5',
            lineHeight: '1.25',
            fontWeight: '400',
            textAlign: 'start'
          }
      };
      return (
        <Box sx={styles.container}>
          <Typography component="p" sx={styles.title}>{SellHistoryDelalizationData.title}
          <RubleIcon/> </Typography>
         
          <Typography component="p" sx={styles.subtitle}>{SellHistoryDelalizationData.subtitle}
          </Typography>
          <Typography component="p" sx={styles.text}>{SellHistoryDelalizationData.text}
          </Typography>
        
        </Box>
      );
    }
    