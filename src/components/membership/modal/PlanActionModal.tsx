import { BaseModal } from "@/components/modal/BaseModal";
import useAuth from "@/hooks/useAuth";
import { Membership } from "@/models/membership";
import UpgradePlan from "./UpgradePlan";
import DowngradePlan from "./DowngradePlan";

type PlanActionModalProps = {
  plan?: Membership;
};

const PlanActionModal = ({ plan }: PlanActionModalProps) => {
  const { user } = useAuth();
  const { current_membership } = user || {};
  const { membership } = current_membership || {};

  const isUpgrade = membership?.price_monthly < plan?.price_monthly;
  const title = isUpgrade ? "Upgrade Plan" : "Downgrade Plan";

  return (
    <BaseModal modalKey="plan-action-modal" title={title}>
      {isUpgrade ? <UpgradePlan plan={plan} /> : <DowngradePlan plan={plan} />}
    </BaseModal>
  );
};

export default PlanActionModal;
