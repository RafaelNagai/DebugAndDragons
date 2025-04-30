import { PixelDialog } from "../pixel-dialog/PixelDialog";

type SequenceSceneProps = {
  scenes: any;
  children?: React.ReactNode;
};

// export const Scenarios = ({ scenes, children }: SequenceSceneProps) => {

//   return (
//     <div>
//       <PixelDialog
//         targetId="pixel-dialog"
//         title="DIALOG COMPONENT"
//         text={
//           "A true dialog component that we can adapt the style and get a callback when finish the text or skip to the next dialog. it is following the character by ID."
//         }
//         type={DialogType.secondary}
//         onComplete={() => {
//           console.log("UHUUULLL FINISHED DIALOG!!!");
//         }}
//       />
//       {children}
//     </div>
//   );
// };
