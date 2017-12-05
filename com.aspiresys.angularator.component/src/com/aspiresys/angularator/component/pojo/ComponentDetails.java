/**
 * 
 */
package com.aspiresys.angularator.component.pojo;

/**
 * @author maha.sriram
 *
 */
public class ComponentDetails {
	private String sourceName;
	private String componentName;
	private boolean inlineTemplate;
	private boolean inlineStyle;
	private boolean testCase;

	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public String getComponentName() {
		return componentName;
	}

	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}

	public boolean isInlineTemplate() {
		return inlineTemplate;
	}

	public void setInlineTemplate(boolean inlineTemplate) {
		this.inlineTemplate = inlineTemplate;
	}

	public boolean isInlineStyle() {
		return inlineStyle;
	}

	public void setInlineStyle(boolean inlineStyle) {
		this.inlineStyle = inlineStyle;
	}

	public boolean isTestCase() {
		return testCase;
	}

	public void setTestCase(boolean testCase) {
		this.testCase = testCase;
	}

}
