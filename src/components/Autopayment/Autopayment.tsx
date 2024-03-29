import AutopaymentMethod from './AutopaymentMethod/AutopaymentMethod';
import AutopaymentContent from './AutopaymentContent/AutopaymentContent';
import AutopaymentQuestionsContent from './AutopaymentQuestionsContent/AutopaymentQuestionsContent';

export default function Autopayment() {
  return (
    <>
      <AutopaymentMethod />
      <AutopaymentContent />
      <AutopaymentQuestionsContent />
    </>
  );
}
