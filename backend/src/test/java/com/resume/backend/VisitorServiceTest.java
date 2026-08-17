package com.resume.backend;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.UpdateItemRequest;
import software.amazon.awssdk.services.dynamodb.model.UpdateItemResponse;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class VisitorServiceTest {

    @Mock
    private DynamoDbClient dynamoDbClient;

    @Test
    public void testIncrementAndGetVisitorCount() {
        // Arrange
        String tableName = "visitor-counter";
        VisitorService visitorService = new VisitorService(dynamoDbClient, tableName);

        Map<String, AttributeValue> returnedAttributes = new HashMap<>();
        returnedAttributes.put("count", AttributeValue.builder().n("125").build());

        UpdateItemResponse mockResponse = UpdateItemResponse.builder()
                .attributes(returnedAttributes)
                .build();

        when(dynamoDbClient.updateItem(any(UpdateItemRequest.class))).thenReturn(mockResponse);

        // Act
        int count = visitorService.incrementAndGetVisitorCount();

        // Assert
        assertEquals(125, count);
    }
}
