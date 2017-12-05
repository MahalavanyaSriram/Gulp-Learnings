package com.aspiresys.angularator.component.wizards;

import java.net.URL;
import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Platform;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.dialogs.ContainerSelectionDialog;
import org.osgi.framework.Bundle;

import com.aspiresys.angularator.component.pojo.ComponentDetails;
import com.aspiresys.angularator.componet.util.AngularatorBasicConstants;
import com.aspiresys.angularator.componet.util.AngularatorErrors;
import com.aspiresys.angularator.componet.util.AngularatorImagePath;
import com.aspiresys.angularator.componet.util.AngularatorMessages;


public class NewComponentWizardPage extends WizardPage {
	
	public ComponentDetails componentDetails;
	
	private Text containerText;

	private Text nameText;

	private Button inlineTemplateButton;

	private Button inlineStyleButton;

	private Button testcaseButton;

	private ISelection selection;

	private static ImageDescriptor image;

	/**
	 * Constructor for NewComponentPage.
	 * 
	 * @param pageName
	 */
	public NewComponentWizardPage(ISelection selection) {
		super("wizardPage");
		setTitle(AngularatorMessages.COMPONENT_WIZARD_TITLE);
		setDescription(AngularatorMessages.COMPONENT_WIZARD_DESCRIPTION);
		Bundle bundle = Platform.getBundle(AngularatorBasicConstants.PLUGIN_ID);
		final URL fullPathString = FileLocator.find(bundle, new Path(AngularatorImagePath.ANGULAR_WIZBAN_ICON), null);
		image = ImageDescriptor.createFromURL(fullPathString);
		setImageDescriptor(image);
		this.selection = selection;
	}

	/**
	 * @see IDialogPage#createControl(Composite)
	 */
	public void createControl(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);
		GridLayout layout = new GridLayout();
		container.setLayout(layout);
		layout.numColumns = 4;
		layout.verticalSpacing = 10;

		// source bolder text field
		Label label = new Label(container, SWT.NULL);
		label.setText("&Source Folder:");
		containerText = new Text(container, SWT.BORDER | SWT.SINGLE);
		GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
		containerText.setLayoutData(gridData);
		containerText.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent e) {
				dialogChanged();
			}
		});

		// browse button
		Button button = new Button(container, SWT.PUSH);
		button.setText("Browse...");
		button.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
				handleBrowse();
			}
		});

		// horizontal line
		Label line = new Label(container, SWT.SEPARATOR | SWT.HORIZONTAL | SWT.BOLD);
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = 4;
		gridData.verticalSpan = 4;
		line.setLayoutData(gridData);

		// Component name text field
		label = new Label(container, SWT.NULL);
		label.setText("&Component Name:");
		nameText = new Text(container, SWT.BORDER | SWT.SINGLE);
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		nameText.setLayoutData(gridData);
		nameText.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent e) {
				
				dialogChanged();
			}
		});

		// in-line template creation check-box
		Label text = new Label(container, SWT.NULL);
		text.setText("Which template and style stub would you like to create?");
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.verticalSpan = 4;
		gridData.verticalAlignment = SWT.END;
		gridData.horizontalSpan = 4;
		text.setLayoutData(gridData);

		inlineTemplateButton = new Button(container, SWT.CHECK);
		inlineTemplateButton.setText("Inline &Template");
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = 4;
		gridData.horizontalIndent = 80;
		inlineTemplateButton.setLayoutData(gridData);

		inlineStyleButton = new Button(container, SWT.CHECK);
		inlineStyleButton.setText("&Inline Style");
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = 4;
		gridData.horizontalIndent = 80;
		inlineStyleButton.setLayoutData(gridData);

		// test-case file generation check-box
		Label quesText = new Label(container, SWT.NULL);
		quesText.setText("Do you want to include testcase?");
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.verticalSpan = 4;
		gridData.verticalAlignment = SWT.END;
		gridData.horizontalSpan = 4;
		quesText.setLayoutData(gridData);

		testcaseButton = new Button(container, SWT.CHECK);
		testcaseButton.setText("&Generate test case file");
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.horizontalSpan = 4;
		gridData.horizontalIndent = 80;
		testcaseButton.setLayoutData(gridData);

		initialize();
		dialogChanged();
		setControl(container);
	}
	
	

	/**
	 * Tests if the current workbench selection is a suitable container to use.
	 */

	private void initialize() {
		if (selection != null && selection.isEmpty() == false && selection instanceof IStructuredSelection) {
			IStructuredSelection ssel = (IStructuredSelection) selection;
			if (ssel.size() > 1)
				return;
			Object obj = ssel.getFirstElement();
			if (obj instanceof IResource) {
				IContainer container;
				if (obj instanceof IContainer)
					container = (IContainer) obj;
				else
					container = ((IResource) obj).getParent();
				containerText.setText(container.getFullPath().toString());
			}
		}

	}

	private void handleBrowse() {
		ContainerSelectionDialog dialog = new ContainerSelectionDialog(getShell(),
				ResourcesPlugin.getWorkspace().getRoot(), false, "Select Project file");
		if (dialog.open() == ContainerSelectionDialog.OK) {
			Object[] result = dialog.getResult();
			if (result.length == 1) {
				containerText.setText(((Path) result[0]).toString());
			}
		}
	}

	/**
	 * Ensures that both text fields are set.
	 */
private void setComponentDetails(){
	componentDetails = new ComponentDetails();
	componentDetails.setComponentName(nameText.getText());
	componentDetails.setSourceName(containerText.getText());
	componentDetails.setInlineStyle(inlineStyleButton.getEnabled());
	componentDetails.setInlineTemplate(inlineTemplateButton.getEnabled());
	componentDetails.setTestCase(testcaseButton.getEnabled());
}
	private void dialogChanged() {
		setComponentDetails();
		IResource source = ResourcesPlugin.getWorkspace().getRoot().findMember(new Path(componentDetails.getSourceName()));
		String componentName = componentDetails.getComponentName();

		if (componentDetails.getSourceName().length() == 0) {
			updateStatus(AngularatorErrors.SOURCE_FILE_NOT_SPECIFIED);
			return;
		}
		if (source == null || (source.getType() & (IResource.PROJECT | IResource.FOLDER)) == 0) {
			updateStatus(AngularatorErrors.SOURCE_FILE_NOT_EXIST);
			return;
		}
		if (!source.isAccessible()) {
			updateStatus(AngularatorErrors.SOURCE_FILE_NOT_ACCESSIBLE);
			return;
		}
		if (componentName.length() == 0) {
			updateStatus(AngularatorErrors.COMPONENT_NAME_NOT_SPECIFIED);
			return;
		}

		updateStatus(null);
	}

	private void updateStatus(String message) {
		setErrorMessage(message);
		setPageComplete(message == null);
	}


}